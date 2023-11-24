/* eslint-disable no-console */
import { initializeFirebaseApp, restore } from 'firestore-export-import';

const serviceAccount = process.env.GOOGLE_APPLICATION_CREDENTIALS;
console.log(serviceAccount);

// JSON To Firestore
const jsonToFirestore = async () => {
  try {
    console.log('Initialzing Firebase');
    const firestore = initializeFirebaseApp(serviceAccount);
    console.log('Firebase Initialized');

    console.log('Start importing your data');
    restore(firestore, 'src/imports/files/imports.json');
    console.log('Upload Success');
  } catch (error) {
    console.log(error);
  }
};

jsonToFirestore();
