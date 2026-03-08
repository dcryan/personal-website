data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

module "ses" {
  source = "./modules/ses"

  domain       = var.domain
  sender_email = var.sender_email
}

module "lambda" {
  source = "./modules/lambda"

  project_name    = var.project_name
  environment     = var.environment
  recipient_email = var.recipient_email
  sender_email    = var.sender_email
  ses_arn         = module.ses.ses_domain_identity_arn
  aws_region      = var.aws_region
}

module "api_gateway" {
  source = "./modules/api-gateway"

  project_name        = var.project_name
  environment         = var.environment
  lambda_function_arn = module.lambda.function_arn
  lambda_invoke_arn   = module.lambda.invoke_arn
  allowed_origins     = var.allowed_origins
}
