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

output "route53_zone_id" {
  description = "Route 53 hosted zone ID for the domain"
  value       = module.route53.zone_id
}

output "route53_name_servers" {
  description = "Name servers to set at your domain registrar"
  value       = module.route53.name_servers
}

output "account_id" {
  description = "AWS account ID where resources are deployed"
  value       = data.aws_caller_identity.current.account_id
}
