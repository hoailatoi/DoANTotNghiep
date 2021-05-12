import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAQmbGakwFR53NhdZ8Xk-wvLVUMKVgfiKs',
  authDomain: 'qrcode-4c509.firebaseapp.com',
  projectId: 'qrcode-4c509',
  storageBucket: 'qrcode-4c509.appspot.com',
  messagingSenderId: '1028510998262',
  appId: '1:1028510998262:web:135e0b4c68791edddfd6d7',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
