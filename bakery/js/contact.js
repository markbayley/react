// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDhRA9cl2aNXHD39XvkNcuCjVKHaNEkiFw",
    authDomain: "inblock.firebaseapp.com",
    databaseURL: "https://inblock.firebaseio.com",
    projectId: "inblock",
    storageBucket: "inblock.appspot.com",
    messagingSenderId: "357621644947",
    appId: "1:357621644947:web:ca0d417ed3eed6e562d766"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}