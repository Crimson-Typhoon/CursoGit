firebase.initializeApp({
 apiKey: "AIzaSyDVTyDRxlK022GJMruPt_v6XWtYigEmeQ8",
  authDomain: "crimson-typhoon.firebaseapp.com",
  projectId: "crimson-typhoon",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});




