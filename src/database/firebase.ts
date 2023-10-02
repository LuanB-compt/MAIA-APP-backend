import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import myRefreshToken from '../maia-app-c33bd-firebase-adminsdk-om3zh-992dc76098.json';

initializeApp({
    credential: cert(myRefreshToken as ServiceAccount),
});

export const db = getFirestore();
