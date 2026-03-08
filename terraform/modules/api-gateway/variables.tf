variable "project_name" {
  description = "Project name used for resource naming"
  type        = string
}

variable "environment" {
  description = "Deployment environment (e.g. production, staging)"
  type        = string
}

variable "lambda_function_arn" {
  description = "ARN of the Lambda function to integrate with"
  type        = string
}

variable "lambda_invoke_arn" {
  description = "Invoke ARN of the Lambda function for API Gateway integration"
  type        = string
}

variable "allowed_origins" {
  description = "List of origins allowed for CORS"
  type        = list(string)
}
