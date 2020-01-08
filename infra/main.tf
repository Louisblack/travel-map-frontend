module "hosting" {
  source             = "git::https://github.com/cloudposse/terraform-aws-cloudfront-s3-cdn.git?ref=0.11.0"
  namespace          = var.namespace
  stage              = var.stage
  name               = "travel-map"
}
