data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

# --- IAM Role and Policies ---

data "aws_iam_policy_document" "lambda_assume_role" {
  statement {
    effect  = "Allow"
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "lambda" {
  name               = "${var.project_name}-contact-lambda-${var.environment}"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json
}

data "aws_iam_policy_document" "lambda_permissions" {
  statement {
    sid    = "CloudWatchLogs"
    effect = "Allow"
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
    ]
    resources = [
      "arn:aws:logs:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:log-group:/aws/lambda/${var.project_name}-contact-${var.environment}:*"
    ]
  }

  statement {
    sid    = "SESSendEmail"
    effect = "Allow"
    actions = [
      "ses:SendEmail",
      "ses:SendRawEmail",
    ]
    resources = ["arn:aws:ses:${data.aws_region.current.name}:${data.aws_caller_identity.current.account_id}:identity/*"]
    condition {
      test     = "StringEquals"
      variable = "ses:FromAddress"
      values   = [var.sender_email]
    }
  }
}

resource "aws_iam_role_policy" "lambda" {
  name   = "${var.project_name}-contact-lambda-policy"
  role   = aws_iam_role.lambda.id
  policy = data.aws_iam_policy_document.lambda_permissions.json
}

# --- Lambda Function ---

data "archive_file" "lambda" {
  type        = "zip"
  source_dir  = "${path.module}/../../lambda/contact"
  output_path = "${path.module}/../../.build/contact-lambda.zip"
}

resource "aws_lambda_function" "contact" {
  function_name    = "${var.project_name}-contact-${var.environment}"
  description      = "Processes contact form submissions and sends email via SES"
  role             = aws_iam_role.lambda.arn
  handler          = "index.handler"
  runtime          = "nodejs20.x"
  timeout          = 10
  memory_size      = 128
  filename         = data.archive_file.lambda.output_path
  source_code_hash = data.archive_file.lambda.output_base64sha256

  environment {
    variables = {
      RECIPIENT_EMAIL    = var.recipient_email
      SENDER_EMAIL       = var.sender_email
      AWS_SES_REGION     = var.aws_region
      TURNSTILE_SECRET_KEY = var.turnstile_secret_key
    }
  }
}

resource "aws_cloudwatch_log_group" "lambda" {
  name              = "/aws/lambda/${aws_lambda_function.contact.function_name}"
  retention_in_days = 30
}
