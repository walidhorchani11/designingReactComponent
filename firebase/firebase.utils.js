import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCDU80Pq3Q6GRMnkn2YbCOfgDk6yqhHuko',
  authDomain: 'speakers-30b4f.firebaseapp.com',
  projectId: 'speakers-30b4f',
  storageBucket: 'speakers-30b4f.appspot.com',
  messagingSenderId: '202823628027',
  appId: '1:202823628027:web:61188bae43394a31deec5e',
  measurementId: 'G-487Z1BP9GB',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'selectionner votre compte' });

export const signInWthGoogle = () => auth.signInWithPopup(provider);

export default firebase;
