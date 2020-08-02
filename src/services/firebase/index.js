// libs
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/analytics';

// config
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);
firebase.firestore();
firebase.analytics();

// if (process.env.NODE_ENV === 'development') {
//   firebase.firestore().settings({ host: 'localhost:8080', ssl: false });
// }

const firebaseStorage = firebase.storage();
const firebaseFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebaseStorage, firebaseFirestore, timestamp };
