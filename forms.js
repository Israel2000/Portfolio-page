//contact.html with forms.js
//connect with firebase

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyByHT27bjyp4YkYZo2eqNC8XWmRwzcxzlg",
    authDomain: "contact-html-form.firebaseapp.com",
    databaseURL: "https://contact-html-form.firebaseio.com",
    projectId: "contact-html-form",
    storageBucket: "",
    messagingSenderId: "616918464468",
    appId: "1:616918464468:web:2ef46ba7d1b276514e0841",
    measurementId: "G-3N0R794R1K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Referance message collection
var messagesRef = firebase.database().ref('message');

//Listen to submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    //Get values
    var name = getInputVal ('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save the message
    saveMessage(name, company, email, phone, message);
}

//Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save the message to firebase
function saveMessage(name, company, email, phone, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}