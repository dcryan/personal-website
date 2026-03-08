variable "domain" {
  description = "Domain name for SES identity verification"
  type        = string
}

variable "sender_email" {
  description = "Sender email address to verify with SES"
  type        = string
}
