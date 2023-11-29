// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getApps, getApp } from 'firebase/app';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.API_ID,
  measurementId: process.env.MEASURMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export default getFirestore();
export const db = getFirestore(initializeApp(firebaseConfig));
export const auth = getAuth(app);
export const storage = getStorage(app);
