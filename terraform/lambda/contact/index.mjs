import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: process.env.AWS_SES_REGION });

const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY;

const headers = {
  "Content-Type": "application/json",
};

function response(statusCode, body) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body),
  };
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function handler(event) {
  try {
    let body;
    try {
      body = JSON.parse(event.body || "{}");
    } catch {
      return response(400, { error: "Invalid JSON in request body." });
    }

    const { name, email, message } = body;
    const phone = body["phone-number"] || "";
    const turnstileToken = body["cf-turnstile-response"];

    // Verify Turnstile token
    if (!turnstileToken) {
      return response(400, { error: "Verification required." });
    }

    const turnstileRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET,
        response: turnstileToken,
      }),
    });

    const turnstileData = await turnstileRes.json();
    if (!turnstileData.success) {
      return response(400, { error: "Verification failed. Please try again." });
    }

    // Validate required fields
    const errors = [];
    if (!name || !name.trim()) errors.push("Name is required.");
    if (!email || !email.trim()) errors.push("Email is required.");
    else if (!validateEmail(email.trim())) errors.push("Email is not valid.");
    if (!message || !message.trim()) errors.push("Message is required.");

    if (errors.length > 0) {
      return response(400, { error: errors.join(" ") });
    }

    const sanitizedName = escapeHtml(name.trim());
    const sanitizedEmail = escapeHtml(email.trim());
    const sanitizedPhone = escapeHtml(phone.trim());
    const sanitizedMessage = escapeHtml(message.trim());

    const timestamp = new Date().toISOString();

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #16a085; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 120px; vertical-align: top;">Name</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${sanitizedName}</td>
          </tr>
          <tr style="background: #f8f9fa;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Email</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">
              <a href="mailto:${sanitizedEmail}" style="color: #16a085;">${sanitizedEmail}</a>
            </td>
          </tr>
          ${sanitizedPhone ? `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Phone</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${sanitizedPhone}</td>
          </tr>` : ""}
          <tr style="background: #f8f9fa;">
            <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px; color: #1a1a2e; white-space: pre-wrap;">${sanitizedMessage}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Submitted at ${timestamp}
        </p>
      </div>
    `;

    const textBody = [
      "New Contact Form Submission",
      "===========================",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      `Message: ${message.trim()}`,
      "",
      `Submitted at ${timestamp}`,
    ]
      .filter(Boolean)
      .join("\n");

    const command = new SendEmailCommand({
      Source: SENDER_EMAIL,
      Destination: {
        ToAddresses: [RECIPIENT_EMAIL],
      },
      ReplyToAddresses: [email.trim()],
      Message: {
        Subject: {
          Data: `Contact Form: ${name.trim()}`,
          Charset: "UTF-8",
        },
        Body: {
          Html: {
            Data: htmlBody,
            Charset: "UTF-8",
          },
          Text: {
            Data: textBody,
            Charset: "UTF-8",
          },
        },
      },
    });

    await ses.send(command);

    return response(200, { message: "Message sent successfully." });
  } catch (err) {
    console.error("Failed to send email:", err);
    return response(500, { error: "An unexpected error occurred. Please try again later." });
  }
}
