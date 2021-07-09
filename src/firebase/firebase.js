import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAHdBmIK9X9MN9Fxzt3h_PeiN2Pv1V6yv8",
  authDomain: "expense-manager-1fdc6.firebaseapp.com",
  projectId: "expense-manager-1fdc6",
  storageBucket: "expense-manager-1fdc6.appspot.com",
  messagingSenderId: "401722236353",
  appId: "1:401722236353:web:22655eebee4a80f7f5a340",
  measurementId: "G-MSBYHF2Q5Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//     description:'Rent',
//     note: 'Test Note',
//     amount: 109500,
//     createdAt: 535363738
// });

// database.ref().on('value',(snapshot) =>{
//     const val = snapshot.val();
//     console.log(`${val.name} lives in ${val.location.city}`);
// })

// database.ref()
// .once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) =>{
//     console.log('Error fetching data', e);
// });

// database.ref().set({
//     name: 'Anil Kumar',
//     age:29,
//     stressLevel:9,
//     isSingle: false,
//     location:{
//         city:'Noida',
//         state: 'UP',
//         country:'India'
//     }
// });

// database.ref('attributes').set({
//     height:170,
//     weight:60
// });
