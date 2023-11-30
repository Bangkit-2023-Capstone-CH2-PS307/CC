import admin from 'firebase-admin';

// Fetch the service account key JSON file contents
// const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Initialize the app, granting admin privileges
admin.initializeApp();

export default admin;
