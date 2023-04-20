import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'shoppy-fd656.firebaseapp.com',
  databaseURL:
    'https://shoppy-fd656-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shoppy-fd656',
  storageBucket: 'shoppy-fd656.appspot.com',
  messagingSenderId: '948065357587',
  appId: '1:948065357587:web:d50c1524790a640cb814e6',
  measurementId: 'G-V83FQVZVT7',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const loginByGoogle = () =>
  signInWithPopup(auth, provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      // console.log(token);
      // console.log(user);
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
