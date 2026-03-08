output "api_endpoint" {
  description = "Base URL of the API Gateway HTTP API"
  value       = aws_apigatewayv2_stage.default.invoke_url
}

output "api_id" {
  description = "ID of the API Gateway HTTP API"
  value       = aws_apigatewayv2_api.contact.id
}

output "execution_arn" {
  description = "Execution ARN of the API Gateway for Lambda permissions"
  value       = aws_apigatewayv2_api.contact.execution_arn
}
