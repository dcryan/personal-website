# --- Amplify App ---

resource "aws_amplify_app" "this" {
  name       = var.app_name
  repository = var.repository
  platform   = "WEB_COMPUTE"

  iam_service_role_arn = var.iam_service_role_arn

  enable_branch_auto_build    = true
  enable_branch_auto_deletion = false

  build_spec = <<-YAML
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - nvm install 20
            - nvm use 20
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - .next/cache/**/*
          - node_modules/**/*
  YAML

  custom_rule {
    source = "/<*>"
    target = "/index.html"
    status = "404-200"
  }

  environment_variables = var.environment_variables
}

# --- Branch ---

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.this.id
  branch_name = var.branch_name
  stage       = "PRODUCTION"

  enable_auto_build = true

  framework = "Next.js - SSR"
}

# --- Custom Domain ---

resource "aws_amplify_domain_association" "this" {
  app_id      = aws_amplify_app.this.id
  domain_name = var.domain

  wait_for_verification = false

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "www"
  }
}
