module "hosting" {
  source             = "git::https://github.com/cloudposse/terraform-aws-cloudfront-cdn.git?ref=0.7.0"
  namespace          = var.namespace
  stage              = var.stage
  name               = "travel-map"
}
