import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBEtXEO72XVON-issuQdM0UQc6ttM9lzOo",
  authDomain: "linkedin-clone2-efcca.firebaseapp.com",
  projectId: "linkedin-clone2-efcca",
  storageBucket: "linkedin-clone2-efcca.appspot.com",
  messagingSenderId: "358391624532",
  appId: "1:358391624532:web:228f29d135e0feb18e8ec1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
