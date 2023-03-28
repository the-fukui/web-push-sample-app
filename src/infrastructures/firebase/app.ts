import { getApp, getApps, initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

console.log('initialize Firebase');
const app = !getApps().length
  ? initializeApp({
      apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
      authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
    })
  : getApp();

const messaging = getMessaging(app);

export { messaging };
