import type { AddDocument } from './types/firestore';
import { firestore } from './app';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export const addDocument: AddDocument = async ({ collectionPath, data }) => {
  const collectionRef = collection(firestore, collectionPath);
  const { id } = await addDoc(collectionRef, { ...data, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });

  return id;
};
