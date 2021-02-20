// import firebase from 'firebase'
// ES Modules:
import firebase from 'firebase/app';
import 'firebase/firestore';
// import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDMPIsmplwYHZ94Cmp8-t4FgvOGuY2zR3Y",
  authDomain: "fun-retrospective-91498.firebaseapp.com",
  projectId: "fun-retrospective-91498",
  storageBucket: "fun-retrospective-91498.appspot.com",
  messagingSenderId: "409746576602",
  appId: "1:409746576602:web:ba6bf0feeeb6c3bd2941e3"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

export const db = firebase.firestore()
// export const storage = firebase.storage()
export const ts = firebase.firestore.FieldValue.serverTimestamp();
export const auth = firebase.auth();
export const GitHubProvider = new firebase.auth.GithubAuthProvider()
// export const emailAndPassProvider = new firebase.auth.Auth.signInWithEmailAndPassword
