// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyAA0MVHLupaDUBwvctequpz-8aDt9JNpb4",
//   authDomain: "checkpoint-2ea0e.firebaseapp.com",
//   databaseURL: "https://checkpoint-2ea0e.firebaseio.com",
//   projectId: "checkpoint-2ea0e",
//   storageBucket: "checkpoint-2ea0e.appspot.com",
//   messagingSenderId: "32985801835"
// };
// firebase.initializeApp(config);

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDyLgS065H1XTNDOP-7WV4sKqXSnOsXewE",
  authDomain: "redsocialusuarios.firebaseapp.com",
  databaseURL: "https://redsocialusuarios.firebaseio.com",
  projectId: "redsocialusuarios",
  storageBucket: "redsocialusuarios.appspot.com",
  messagingSenderId: "63565909344"
};
firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();