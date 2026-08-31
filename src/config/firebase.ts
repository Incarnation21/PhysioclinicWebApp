import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA52JczCuQIXrhsjtzJjNbhN1mqPa2jtb8",
  authDomain: "docdoor-cc3b8.firebaseapp.com",
  projectId: "docdoor-cc3b8",
  storageBucket: "docdoor-cc3b8.firebasestorage.app",
  messagingSenderId: "533370431065",
  appId: "1:533370431065:web:37e739710a40043279b348",
  measurementId: "G-WQ4685PXN0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = (() => {
  try {
    return typeof window !== 'undefined' ? getAnalytics(app) : null;
  } catch {
    return null;
  }
})();
