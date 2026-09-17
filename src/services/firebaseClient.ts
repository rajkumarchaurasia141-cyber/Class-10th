import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;

// Safe lazy Firebase initialization
export function getFirebaseServices() {
  if (app && db && auth) {
    return { app, db, auth, isAvailable: true };
  }

  try {
    // Attempt to load dynamically or use existing apps
    if (getApps().length > 0) {
      app = getApps()[0];
      db = getFirestore(app);
      auth = getAuth(app);
      return { app, db, auth, isAvailable: true };
    }

    // Default configuration placeholder for Firebase
    // If project is configured in Firebase console, these credentials hook in
    const metaEnv = (import.meta as any)?.env || {};
    const config = {
      apiKey: metaEnv.VITE_FIREBASE_API_KEY || "AIzaSyDemoBSEBClass10KeyForPadhegaBihar",
      authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || "padhega-bihar-class10.firebaseapp.com",
      projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || "padhega-bihar-class10",
      storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || "padhega-bihar-class10.appspot.com",
      messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || "1029384756",
      appId: metaEnv.VITE_FIREBASE_APP_ID || "1:1029384756:web:abcdef123456",
    };

    if (config.apiKey) {
      app = initializeApp(config);
      db = getFirestore(app);
      auth = getAuth(app);
      return { app, db, auth, isAvailable: true };
    }
  } catch (err) {
    console.warn("Firebase initialized in local/offline storage mode:", err);
  }

  return { app: null, db: null, auth: null, isAvailable: false };
}
