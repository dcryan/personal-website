variable "domain" {
  description = "Domain name for SES identity verification"
  type        = string
}

variable "recipient_email" {
  description = "Recipient email address to verify with SES (required for sandbox mode)"
  type        = string
}
