output "function_arn" {
  description = "ARN of the Lambda function"
  value       = aws_lambda_function.contact.arn
}

output "invoke_arn" {
  description = "Invoke ARN of the Lambda function for API Gateway integration"
  value       = aws_lambda_function.contact.invoke_arn
}

output "function_name" {
  description = "Name of the Lambda function"
  value       = aws_lambda_function.contact.function_name
}
