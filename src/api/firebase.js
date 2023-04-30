import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { get, getDatabase, ref, remove, set } from 'firebase/database';

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
});

const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getDatabase();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async user => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

export async function adminUser(user) {
  return get(ref(db, 'admins')) //
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

export async function addItem(
  id,
  fileUrl,
  name,
  price,
  category,
  description,
  options
) {
  set(ref(db, 'clothes/' + id), {
    id,
    fileUrl,
    name,
    price,
    category,
    description,
    options,
  });
}

export async function getItems() {
  return get(ref(db, 'clothes')).then(snapshot =>
    Object.values(snapshot.val())
  );
}

export async function addCartItemByUser(
  userId,
  id,
  fileUrl,
  name,
  price,
  category,
  description,
  options,
  size
) {
  set(ref(db, `carts/${userId}/${id}`), {
    id,
    fileUrl,
    name,
    price,
    category,
    description,
    options,
    size,
  });
}

export async function getCartItems(userId) {
  return get(ref(db, `carts/${userId}`)).then(snapshot =>
    Object.values(snapshot.val())
  );
}

export async function getCartItemsNum(userId) {
  return get(ref(db, `carts/${userId}`)).then(
    snapshot => Object.keys(snapshot.val()).length
  );
}

export async function removeCartItem(userId, id) {
  remove(ref(db, `carts/${userId}/${id}`));
}
