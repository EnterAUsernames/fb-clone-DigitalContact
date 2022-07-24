import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional



const firebaseConfig = {
  apiKey: "AIzaSyDAmVxm8UEQC3UeZmul-pXsyFo60oIv1_M",
  authDomain: "facebook-clone-a4b28.firebaseapp.com",
  projectId: "facebook-clone-a4b28",
  storageBucket: "facebook-clone-a4b28.appspot.com",
  messagingSenderId: "902933583580",
  appId: "1:902933583580:web:346c956b7590cde9924619",
  measurementId: "G-5X2NQKLKL2"
};

const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// to access Google Auth

export { auth, provider };
export default db;

