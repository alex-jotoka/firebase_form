const firebaseConfig = {
    apiKey: "AIzaSyAFYGSvYL5nFIhHm0GhOY5Pm9TsPtROwDA",
    authDomain: "fakebook1-0.firebaseapp.com",
    databaseURL: "https://fakebook1-0-default-rtdb.firebaseio.com",
    projectId: "fakebook1-0",
    storageBucket: "fakebook1-0.appspot.com",
    messagingSenderId: "999041202025",
    appId: "1:999041202025:web:70fffb3565e2aa5f28eff8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  var firestore = app.firestore()
//Variable to access database collection
const db = firestore.collection("formData")

//Get Submit Form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let firstName = document.getElementById('fname').value
  let lastName = document.getElementById('lname').value
//   let country = document.getElementById('country').value

  //Save Form Data To Firebase
  db.doc().set({
    fname: firstName,
    lname: lastName,
    // country: country
  }).then( () => {
    console.log("Data saved")
  }).catch((error) => {
    console.log(error)
  })

  //alert
  alert("Your Form Has Been Submitted Successfully")
})