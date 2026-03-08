output "ses_domain_identity_arn" {
  description = "ARN of the SES domain identity"
  value       = aws_ses_domain_identity.this.arn
}

output "ses_verification_token" {
  description = "TXT record value for SES domain verification"
  value       = aws_ses_domain_identity.this.verification_token
}

output "ses_dkim_tokens" {
  description = "DKIM CNAME tokens for email authentication"
  value       = aws_ses_domain_dkim.this.dkim_tokens
}
