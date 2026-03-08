variable "domain" {
  description = "Primary domain name for the hosted zone"
  type        = string
}

variable "ses_verification_token" {
  description = "SES domain verification TXT record value"
  type        = string
}

variable "ses_dkim_tokens" {
  description = "SES DKIM CNAME tokens for email authentication"
  type        = list(string)
}

variable "amplify_cert_validation_name" {
  description = "ACM certificate validation CNAME name (from Amplify domain association)"
  type        = string
}

variable "amplify_cert_validation_value" {
  description = "ACM certificate validation CNAME value (from Amplify domain association)"
  type        = string
}

variable "amplify_cloudfront_domain" {
  description = "CloudFront domain for Amplify app (e.g. d2qwknq61cscz6.cloudfront.net)"
  type        = string
}
