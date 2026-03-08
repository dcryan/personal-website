variable "app_name" {
  description = "Name of the Amplify app"
  type        = string
}

variable "repository" {
  description = "GitHub repository URL"
  type        = string
}

variable "domain" {
  description = "Custom domain name to associate with the app"
  type        = string
}

variable "branch_name" {
  description = "Git branch to deploy"
  type        = string
  default     = "main"
}

variable "environment_variables" {
  description = "Environment variables for the Amplify app"
  type        = map(string)
  default     = {}
}

variable "iam_service_role_arn" {
  description = "IAM service role ARN for Amplify"
  type        = string
}
