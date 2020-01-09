module "hosting" {
  source             = "./hosting"
  namespace          = var.namespace
  stage              = var.stage
  name               = "travel-map"
}
