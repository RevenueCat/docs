#!/bin/bash

#================================================================================
#================================================================================

# This is a script to automate the setup of Google Cloud service account and credentials, required for integrating your Google Play app with RevenueCat.

# Visit https://console.cloud.google.com/, choose the project you want to use, and then click on the Cloud Shell icon in the top right corner.

# In the Cloud Console shell instance, create a new file called `credentials.sh` and paste the code below into it.

#==[IMPORTANT]== Modify the variables below to match your Google Cloud project and service account.

# After modifying the variables below, run the script by typing `bash credentials.sh` in the Cloud Console shell instance terminal. The console will output the status of the script as it runs.

# Once the script has finished running, you will need to upload the `revenuecat-key.json` file to RevenueCat in your Project Settings > Google Play App Settings > Service Account Key.

#================================================================================
#================================================================================

# Found in Google Cloud Console -> Project Overview -> Project ID
PROJECT_ID="your_google_cloud_project_id"

# The name of the service account to create. You don't need to change this.
SERVICE_ACCOUNT_NAME="revenuecat-service-account"

# The name of the key file to create in this Cloud Console shell instance. You don't need to change this.
KEY_FILE_NAME="revenuecat-key"

#================================================================================
#================================================================================

# Exit on error
set -e

# Helper functions to print styled messages
echo_info() {
  echo -e "\033[1;34m[INFO] $1\033[0m"
}
echo_success() {
  echo -e "\033[1;32m[SUCCESS] $1\033[0m"
}
echo_warning() {
  echo -e "\033[1;33m[WARNING] $1\033[0m"
}
echo_error() {
  echo -e "\033[1;31m[ERROR] $1\033[0m"
}

echo_info "🔎 Starting Google Cloud setup for RevenueCat integration..."

# Check if the PROJECT_ID has been updated
if [ "$PROJECT_ID" == "your_google_cloud_project_id" ]; then
  echo_error "🚨 PROJECT_ID is set to the default value. Please update it with your actual Google Cloud project ID."
  exit 1
fi

echo_info "Switching to project: $PROJECT_ID"
gcloud config set project $PROJECT_ID

# Enable APIs required for this automation script
echo_info "Enabling APIs needed for service account automation..."
gcloud services enable cloudresourcemanager.googleapis.com
sleep 2
gcloud services enable iam.googleapis.com
sleep 2

# Enable APIs required by RevenueCat
echo_info "Enabling RevenueCat required APIs..."
gcloud services enable androidpublisher.googleapis.com
sleep 2
gcloud services enable playdeveloperreporting.googleapis.com  
sleep 2
gcloud services enable pubsub.googleapis.com

echo_success "✅ APIs enabled successfully."

# Create Service Account
echo_info "Creating service account: $SERVICE_ACCOUNT_NAME"
gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
  --description="Service account for RevenueCat integration" \
  --display-name="RevenueCat Service Account"
echo_success "✅ Service account created successfully."

echo_info "Waiting 30s for service account to be available..."
sleep 30

# Grant Roles
echo_info "Granting roles to the service account..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/pubsub.editor"
echo_success "✅ Pub/Sub Editor role assigned."

gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com" \
  --role="roles/monitoring.viewer"
echo_success "✅ Monitoring Viewer role assigned."

# Create Service Account Key
echo_info "Generating service account key..."
gcloud iam service-accounts keys create $KEY_FILE_NAME.json \
  --iam-account="$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com"
echo_success "✅ Service account key created: $KEY_FILE_NAME.json"
echo_info "Keep this key safe and upload it to RevenueCat in your Project Settings > Google Play App Settings > Service Account Key."

# Final Confirmation
echo_info "Verifying service account and key details..."
gcloud iam service-accounts list | grep $SERVICE_ACCOUNT_NAME

echo_info "Listing keys for the service account..."
gcloud iam service-accounts keys list \
  --iam-account="$SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com"
echo_success "🎉 Setup complete! The service account is ready for RevenueCat integration. Use the file $KEY_FILE_NAME.json for your RevenueCat project, and use the service account $SERVICE_ACCOUNT_NAME@$PROJECT_ID.iam.gserviceaccount.com for permissions in Google Play Console."

exit 0