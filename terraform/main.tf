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

module "route53" {
  source = "./modules/route53"

  domain                 = var.domain
  ses_verification_token = module.ses.ses_verification_token
  ses_dkim_tokens        = module.ses.ses_dkim_tokens

  # Amplify custom domain DNS records
  amplify_cert_validation_name  = "_9901f96d4a2a7675076d03ecdcc17396.${var.domain}"
  amplify_cert_validation_value = "_342d104d613e94281fa0f2b109719d65.jkddzztszm.acm-validations.aws."
  amplify_cloudfront_domain     = "d2qwknq61cscz6.cloudfront.net"
}

module "amplify" {
  source = "./modules/amplify"

  app_name             = var.project_name
  repository           = var.github_repository
  domain               = var.domain
  iam_service_role_arn = var.amplify_service_role_arn
}
