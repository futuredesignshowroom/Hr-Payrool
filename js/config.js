// Firebase configuration
const firebaseConfig = {
  databaseURL: "https://hr-payrool-default-rtdb.firebaseio.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { db };