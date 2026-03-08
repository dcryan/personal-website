# --- Hosted Zone ---

resource "aws_route53_zone" "this" {
  name = var.domain
}

# --- SES Domain Verification ---

resource "aws_route53_record" "ses_verification" {
  zone_id = aws_route53_zone.this.zone_id
  name    = "_amazonses.${var.domain}"
  type    = "TXT"
  ttl     = 600
  records = [var.ses_verification_token]
}

# --- SES DKIM Records ---

resource "aws_route53_record" "ses_dkim" {
  count   = 3
  zone_id = aws_route53_zone.this.zone_id
  name    = "${var.ses_dkim_tokens[count.index]}._domainkey.${var.domain}"
  type    = "CNAME"
  ttl     = 600
  records = ["${var.ses_dkim_tokens[count.index]}.dkim.amazonses.com"]
}

# --- Amplify ACM Certificate Validation ---

resource "aws_route53_record" "amplify_cert_validation" {
  zone_id = aws_route53_zone.this.zone_id
  name    = var.amplify_cert_validation_name
  type    = "CNAME"
  ttl     = 300
  records = [var.amplify_cert_validation_value]
}

# --- Amplify Root Domain (alias — CNAME not allowed at zone apex) ---

resource "aws_route53_record" "apex" {
  zone_id = aws_route53_zone.this.zone_id
  name    = var.domain
  type    = "A"

  alias {
    name                   = var.amplify_cloudfront_domain
    zone_id                = "Z2FDTNDATAQYW2"
    evaluate_target_health = false
  }
}

# --- Amplify WWW Subdomain ---

resource "aws_route53_record" "www" {
  zone_id = aws_route53_zone.this.zone_id
  name    = "www.${var.domain}"
  type    = "CNAME"
  ttl     = 300
  records = [var.amplify_cloudfront_domain]
}
