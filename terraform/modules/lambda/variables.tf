variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
}

variable "environment" {
  description = "Deployment environment (e.g. production, staging)"
  type        = string
}

variable "recipient_email" {
  description = "Email address that receives contact form submissions"
  type        = string
}

variable "sender_email" {
  description = "Email address used as the From address in SES"
  type        = string
}

variable "ses_arn" {
  description = "ARN of the SES domain identity for IAM policy scoping"
  type        = string
}

variable "aws_region" {
  description = "AWS region where SES is configured"
  type        = string
}

variable "turnstile_secret_key" {
  description = "Cloudflare Turnstile secret key for bot verification"
  type        = string
  sensitive   = true
}
