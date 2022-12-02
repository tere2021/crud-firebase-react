import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
 /*  apiKey: "AIzaSyAc7_EF6FcIKkSB2z8CpT_ENc4Tv_zYdDg",
  authDomain: "lista-de-productos-fb477.firebaseapp.com",
  projectId: "lista-de-productos-fb477",
  storageBucket: "lista-de-productos-fb477.appspot.com",
  messagingSenderId: "580643840085",
  appId: "1:580643840085:web:4a5607a93ee6e64e6974dc" */
  apiKey: "AIzaSyCoOE6dbLPVrY-u_zx6utNU6x0WddkGDQE",
  authDomain: "awesome-aspect-348801.firebaseapp.com",
  projectId: "awesome-aspect-348801",
  storageBucket: "awesome-aspect-348801.appspot.com",
  messagingSenderId: "564117098721",
  appId: "1:564117098721:web:b51e9ffd392056f03d27a0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);