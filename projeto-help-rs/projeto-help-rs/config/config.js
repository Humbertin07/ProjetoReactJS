import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA58bOK-EPPeLwKpAZKchSLykQX4cFVwBM",
  authDomain: "helprs-7f22e.firebaseapp.com",
  databaseURL: "https://helprs-7f22e-default-rtdb.firebaseio.com",
  projectId: "helprs-7f22e",
  storageBucket: "helprs-7f22e.appspot.com",
  messagingSenderId: "501152136472",
  appId: "1:501152136472:web:6c0fc693a405ba0dfbf26d",
  measurementId: "G-J1R0VCXKRS"
};


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;