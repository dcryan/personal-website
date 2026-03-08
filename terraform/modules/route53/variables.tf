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
