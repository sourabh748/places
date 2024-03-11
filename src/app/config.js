const apiKey = String(import.meta.env.VITE_API_KEY);
const authDomain = String(import.meta.env.VITE_AUTH_DOMAIN);
const projectId = String(import.meta.env.VITE_PROJECT_ID);
const storageBucket = String(import.meta.env.VITE_STORAGE_BUCKET);
const messagingSenderId = String(import.meta.env.VITE_MESSAGING_SENDER_ID);
const appId = String(import.meta.env.VITE_APP_ID);

const connectionURLString = String(import.meta.env.VITE_DB_URL_ID);

export const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  databaseURL: connectionURLString,
  appId,
};
