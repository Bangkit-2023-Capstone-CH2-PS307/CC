import admin from 'firebase-admin';

// Fetch the service account key JSON file contents
const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
