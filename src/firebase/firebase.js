import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyA0ba2nBPEBpqGDzmjbfJEUEFgSZsvirHw",
  authDomain: "expensify-72f98.firebaseapp.com",
  databaseURL: "https://expensify-72f98-default-rtdb.firebaseio.com",
  projectId: "expensify-72f98",
  storageBucket: "expensify-72f98.appspot.com",
  messagingSenderId: "112578237286",
  appId: "1:112578237286:web:e5797a4e20564634776ea7",
  measurementId: "G-YD71GP314J",
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };
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
