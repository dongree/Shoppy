import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';
import { get, getDatabase, onValue, ref, set } from 'firebase/database';

export default class Firebase {
  constructor() {
    this.app = initializeApp({
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: 'shoppy-fd656.firebaseapp.com',
      databaseURL:
        'https://shoppy-fd656-default-rtdb.asia-southeast1.firebasedatabase.app',
      projectId: 'shoppy-fd656',
      storageBucket: 'shoppy-fd656.appspot.com',
      messagingSenderId: '948065357587',
      appId: '1:948065357587:web:d50c1524790a640cb814e6',
      measurementId: 'G-V83FQVZVT7',
    });
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
    this.db = getDatabase();
  }

  loginByGoogle = () =>
    signInWithPopup(this.auth, this.provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        // console.log(token);
        // console.log(user);
        return result.user;
      })
      .catch(error => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  logout = () =>
    signOut(this.auth)
      .then(() => {
        // Sign-out successful.
        console.log('logout');
      })
      .catch(error => {
        // An error happened.
      });

  addItem = (id, fileUrl, name, price, category, description, options) => {
    set(ref(this.db, 'clothes/' + id), {
      id,
      fileUrl,
      name,
      price,
      category,
      description,
      options,
    });
  };

  getItems = () =>
    get(ref(this.db, 'clothes')).then(snapshot =>
      Object.values(snapshot.val())
    );
}
