import { getDeviceToken } from '@/infrastructures/firebase/messaging';
import { addDocument } from '@/infrastructures/firebase/firestore';

export const registerNotification = async () => {
  // get device token
  const token = await getDeviceToken();
  console.log({ token });

  // register token to firestore
  const id = await addDocument({
    collectionPath: 'tokens-v1',
    data: {
      token,
    },
  });
  console.log({ id });

  return id;
};
