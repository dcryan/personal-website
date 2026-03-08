output "api_endpoint" {
  description = "API Gateway endpoint URL for the contact form"
  value       = module.api_gateway.api_endpoint
}

output "lambda_function_name" {
  description = "Name of the deployed Lambda function"
  value       = module.lambda.function_name
}

output "ses_domain_identity_arn" {
  description = "ARN of the SES domain identity"
  value       = module.ses.ses_domain_identity_arn
}

output "ses_verification_token" {
  description = "TXT record value to add to DNS for SES domain verification"
  value       = module.ses.ses_verification_token
}

output "ses_dkim_tokens" {
  description = "DKIM CNAME record tokens to add to DNS for email authentication"
  value       = module.ses.ses_dkim_tokens
}

output "account_id" {
  description = "AWS account ID where resources are deployed"
  value       = data.aws_caller_identity.current.account_id
}
