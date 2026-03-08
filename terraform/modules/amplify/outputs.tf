output "app_id" {
  description = "Amplify app ID"
  value       = aws_amplify_app.this.id
}

output "default_domain" {
  description = "Default Amplify domain"
  value       = aws_amplify_app.this.default_domain
}

output "domain_association" {
  description = "Custom domain association details"
  value       = aws_amplify_domain_association.this
}
