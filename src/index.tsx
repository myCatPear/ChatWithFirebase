import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8Yd2K1AO1eoYPVV2PVjAgrmjc7UN2bpQ",
    authDomain: "chat-react-4fc42.firebaseapp.com",
    projectId: "chat-react-4fc42",
    storageBucket: "chat-react-4fc42.appspot.com",
    messagingSenderId: "258428095984",
    appId: "1:258428095984:web:bd0ece62689b214aa1a135",
    measurementId: "G-RWQBY9091W"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export const Context = createContext<any>(null)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
      auth,
      firestore,
      firebase
  }}>
    <App />
  </Context.Provider>
);

reportWebVitals();
