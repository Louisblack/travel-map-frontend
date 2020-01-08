provider "aws" {
  region = "eu-west-1"
}

terraform {
  backend "s3" {
    bucket = "travel-map-state"
    key    = "state.tfstate"
    region = "eu-west-1"
  }
}
