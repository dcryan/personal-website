variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Deployment environment (e.g. production, staging)"
  type        = string
  default     = "production"
}

variable "domain" {
  description = "Primary domain name used for CORS and SES identity"
  type        = string
}

variable "recipient_email" {
  description = "Email address that receives contact form submissions"
  type        = string
}

variable "sender_email" {
  description = "Email address used as the From address for contact form emails"
  type        = string
}

variable "allowed_origins" {
  description = "List of origins allowed for CORS on the API Gateway"
  type        = list(string)
}

variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
  default     = "personal-website"
}

variable "github_repository" {
  description = "GitHub repository URL for Amplify"
  type        = string
}

variable "amplify_service_role_arn" {
  description = "IAM service role ARN for Amplify (created via console)"
  type        = string
}
