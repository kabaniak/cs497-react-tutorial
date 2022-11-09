import { useCallback, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, connectDatabaseEmulator, onValue, ref, update } from 'firebase/database';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithCredential } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBJWiRx8BNbJiliImc7clJxg_eH416lbVY",
    authDomain: "cs497-react-tutorial.firebaseapp.com",
    databaseURL: "https://cs497-react-tutorial-default-rtdb.firebaseio.com",
    projectId: "cs497-react-tutorial",
    storageBucket: "cs497-react-tutorial.appspot.com",
    messagingSenderId: "610265126009",
    appId: "1:610265126009:web:898f5cbe52632e4666b0a8"
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase);
const database = getDatabase(firebase);


if (!window.EMULATION && process.env.REACT_APP_EMULATE) {
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
  connectDatabaseEmulator(database, "127.0.0.1", 9000);

  console.log("connected everything");

  signInWithCredential(auth, GoogleAuthProvider.credential(
    '{"sub": "IcUKaUhTkwqHoy2dYvT7645Sn6Tp", "email": "tester@gmail.com", "email_verified": true}'
  ));

  console.log("signed in");

  window.EMULATION = true;
}

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();
  
  useEffect(() => (
    onAuthStateChanged(getAuth(firebase), setUser)
  ));

  return [user];
};