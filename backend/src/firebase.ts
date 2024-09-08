import { initializeApp, cert, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  throw new Error(
    "GOOGLE_APPLICATION_CREDENTIALS is not set. Please set it in the .env file or in Secrets tab on Replit"
  );
}

initializeApp({
  credential: applicationDefault(),
});

export const auth = getAuth();
