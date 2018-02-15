import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZiOBFHPhL2eTV-VBkkpQOCZ7wssLPdO0",
  authDomain: "expensify-7fc18.firebaseapp.com",
  databaseURL: "https://expensify-7fc18.firebaseio.com",
  projectId: "expensify-7fc18",
  storageBucket: "expensify-7fc18.appspot.com",
  messagingSenderId: "280545481821"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').push({
  description: 'Beer',
  note: '',
  amount: 350,
  createdAt: 964138744
});

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 50000,
  createdAt: 526994744
});

database.ref('expenses').push({
  description: 'Dinner',
  note: '',
  amount: 1600,
  createdAt: 673413874
});

// database.ref('notes/-L5PkQ6kUlqCFuleqwc0').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//   notes: {
//     ahiu2wt: {
//       title: 'First note',
//       body: 'This is the note: 12'
//     },
//     ikujpo2: {
//       title: 'Second note',
//       body: 'This is the note: 55'
//     }
//   },
// };

// const notes = [{
//   id: '12',
//   title: 'First note',
//   body: 'This is the note: 12'
// }, {
//   id: '55',
//   title: 'Second note',
//   body: 'This is the note: 55'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (error) => {
//   console.log('Error with data fetching', error);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(22);
// }, 10500);

// database.ref('location/country')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log('Error fetching data.', error);
//   });

// database.ref().set({
//   name: 'Agnes Ching',
//   age: 20,
//   stressLevel: 8,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'London',
//     country: 'United Kingdom'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((error) => {
//   console.log('This failed', error);
// });

// database.ref().update({
//   stressLevel: 6,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isGirl').set(null);

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Removed data.');
//   }).catch((error) => {
//     console.log('Remove failed:' + error);
//   });
