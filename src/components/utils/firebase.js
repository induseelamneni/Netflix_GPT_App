import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwjf_PceutUGZPWfjgJmccgH1xX7jVlD0",
  authDomain: "indunetflixgpt.firebaseapp.com",
  projectId: "indunetflixgpt",
  storageBucket: "indunetflixgpt.appspot.com",
  messagingSenderId: "412731198819",
  appId: "1:412731198819:web:35bdab33b9d82f2f011756",
  measurementId: "G-F3PDFH9CRE"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();