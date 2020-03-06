import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCREJveoXiq18NM6aG4U_4BurKWmMSxaLw",
    authDomain: "socialist-7ca70.firebaseapp.com",
    databaseURL: "https://socialist-7ca70.firebaseio.com",
    projectId: "socialist-7ca70",
    storageBucket: "socialist-7ca70.appspot.com",
    messagingSenderId: "579774027714",
    appId: "1:579774027714:web:3e655831329bab9a6de85b",
    measurementId: "G-2313YBH1DL"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();

  firebase.analytics();

export {
    storage, firebase as default
}