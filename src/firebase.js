import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCr-Ifo1DtSecLviu9BgflIaC4qSuiq1a4",
  authDomain: "stelya-store.firebaseapp.com",
  projectId: "stelya-store",
  storageBucket: "stelya-store.appspot.com",
  messagingSenderId: "809425179996",
  appId: "1:809425179996:web:9504710d6b5c746fa49d99",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
