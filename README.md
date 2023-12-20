<div align="center">
  <img src="https://raw.githubusercontent.com/Bangkit-2023-Capstone-CH2-PS307/.github/main/profile/assets/logo.png" alt="Logo NutriKita" style="width: 20%;">
  <h1>REST APIs</h1>
</div>

# Tools
- [Google Cloud Platform](https://cloud.google.com/)
- [Node.js](https://nodejs.org/en) version 20.9.0
- [Express.js](https://expressjs.com/)
- [Firebase](https://firebase.google.com/)
- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/)

# Setup Firebase
Since we are using Firebase & Cloud Firestore in GCP services, we need to configure The Firebase Admin SDK to interact with Firebase from our local environment. To set **GOOGLE_APPLICATION_CREDENTIALS** environment variable you can follow these steps at the following link: [https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments](https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments)

# Installation
1. Clone repository
```
git clone https://github.com/Bangkit-2023-Capstone-CH2-PS307/CC.git
```
2. Install dependencies
```
npm install
```
3. Build and run the project
```
npm run dev
```
Navigate to http://localhost:8080

# API Documentation
We published our API documentation from Postman, you can view it [here](https://documenter.getpostman.com/view/5905079/2s9YkjC4fq)

# CI/CD Workflow
To perform automatic deployment to Cloud Run, we use GitHub Actions to Set up the gcloud CLI/SDK, Build and store a Docker Image to the Artifact Registry, then use the Docker Image from the Artifact Registry deployed to Cloud Run, you can see the full configuration in [cloud-run.yml](./.github/workflows/cloud-run.yml).

### Setup GCP Service Account Credentials
1. You can create service account credentials at the following link: [https://cloud.google.com/iam/docs/service-accounts-create](https://cloud.google.com/iam/docs/service-accounts-create)
2. Grant these role to work with GitHub Actions
    - Artifact Registry Administrator
    - Artifact Registry Writer
    - Cloud Run Admin
    - Editor
    - Service Account User
    - Storage Admin
3. Then, create a service account key at the following link: [https://cloud.google.com/iam/docs/keys-create-delete](https://cloud.google.com/iam/docs/keys-create-delete)
4. Download and secure the key. Don't lose it!

### Setup GitHub Actions
1. You can read about GitHub Actions secrets and variable at the following link: [https://docs.github.com/en/actions/learn-github-actions/variables](https://docs.github.com/en/actions/learn-github-actions/variables)
2. Under GitHub Repository secrets, add these secrets:
    - CLOUD_RUN_SERVICE_NAME (**_Your Cloud Run service name_**)
    - GCP_CREDENTIALS (**_Your GCP Service Account Credentials_**)
    - PROJECT_ID (**_Your GCP Project ID_**)
    - REGION (**_Your deployed Cloud Run region_**)
3. That's all. Just push the code changes to your **main** branch. And Boom!!!, you can check your Cloud Run deployment url in Google Cloud Console.

<div align="center">
  <img src="https://raw.githubusercontent.com/Bangkit-2023-Capstone-CH2-PS307/.github/main/profile/assets/cicd-workflow.png" alt="Cloud Architecture" style="width: 100%;">
</div>

# Cloud Architecture
<div align="center">
  <img src="https://raw.githubusercontent.com/Bangkit-2023-Capstone-CH2-PS307/.github/main/profile/assets/architecture_hd.png" alt="Cloud Architecture" style="width: 100%;">
</div>