import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWvEZ4Dik6weNDMl3-K_xnhcaQBv5hW0g",
  authDomain: "stelya-store-dcb15.firebaseapp.com",
  projectId: "stelya-store-dcb15",
  storageBucket: "stelya-store-dcb15.appspot.com",
  messagingSenderId: "889795805511",
  appId: "1:889795805511:web:046f2bac6b503a5bfc4c62",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
