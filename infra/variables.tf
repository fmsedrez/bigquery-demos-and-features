variable "gcp_project_id" {
  type        = string
  description = "Google Cloud Project ID"
}

variable "env" {
  type        = string
  description = "Project ENV"
}

variable "region" {
  description = "Google Cloud region"
  type        = string
  default     = "us-east1"
}

variable "zone" {
  description = "Google Cloud zone"
  type        = string
  default     = "us-east1-b"
}

variable git_branch {
  description = "Git branch"
  type        = string
  default     = "main"
}