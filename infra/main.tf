# PROVIDER: Config
provider "google" {
  project = var.gcp_project_id
  region  = var.region
}

provider "google-beta" {
  project = var.gcp_project_id
  region  = var.region
}
# SERVICE: Secret Manager
data "google_secret_manager_secret_version" "token_git_dataform_demos_and_features" {
  secret = "token-git-token-git-dataform-demos-and-features"
}

# SERVICE: DATAFORM
# REPOSITORY: Dataform Demos and Features
resource "google_dataform_repository" "dataform_demos_and_features" {
  provider = google-beta
  name     = "dataform-demos-and-features"

  git_remote_settings {
    url                                 = "https://github.com/fmsedrez/dataform-demos-and-features.git"
    default_branch                      = var.git_branch
    authentication_token_secret_version = data.google_secret_manager_secret_version.token_git_dataform_demos_and_features.name
  }
}
