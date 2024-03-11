import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";
import { getDatabase } from "firebase/database";

export class Configure {
  provider = new GoogleAuthProvider();
  app = initializeApp(firebaseConfig);

  constructor() {
    this.provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    this.auth = getAuth(this.app);
    this.auth.useDeviceLanguage();
    this.database = getDatabase(this.app)
  }
}

export class FirebaseAuthProvider extends Configure {
  constructor() {
    super();
  }

  async authLogin() {
    let user = null;
    let token = null;

    try {
      const result = await signInWithPopup(this.auth, this.provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      token = credential.accessToken;
      user = result.user;
    } catch (error) {
      console.log(error?.message, error.code);
    }

    return { user, token };
  }

  authLogout() {
    try {
      signOut(this.auth);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new FirebaseAuthProvider();
