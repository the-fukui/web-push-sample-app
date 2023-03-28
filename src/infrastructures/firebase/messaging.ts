import { getMessaging, getToken } from 'firebase/messaging';
import { messaging } from './app';

export const getDeviceToken = async () => {
  const token = await getToken(messaging, { vapidKey: import.meta.env.PUBLIC_FIREBASE_VAPID_KEY });
  return token;
};
