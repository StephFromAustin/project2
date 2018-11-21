$(document).ready(function(){
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAZAlvpmVb2ewdtEu5MuUEjHXN__RRtK-g",
    authDomain: "shindig-104.firebaseapp.com",
    databaseURL: "https://shindig-104.firebaseio.com",
    projectId: "shindig-104",
    storageBucket: "shindig-104.appspot.com",
    messagingSenderId: "774972844187"
};
firebase.initializeApp(config);

//Firebase authenitcation reference
const auth = firbase.auth();
const dB = firebase.database();
const user = firebase.auth().currentUser;

//handles the sign in
const signIn = () => {
    if (user) {
        auth.signOut();
    }else{
        let email = $(".email-input").val().trim();
        let password = $(".password-input").val().trim();
        workingUser = email;
        //if the email is not correctly input
        if(email.length < 9){
            alert("Please enter a valid email address");
            return;
        }else if(password.length < 8){
            alert("Please enter a valid password");
            return;
        }
        //starting the sign in process
        auth.signInWithEmailAndPassword(email, password).catch(function (error){
            //error variables
            let errorCode = error.code;
            let errorMsg = error.message;
            if(errorCode === 'auth/wrong-password'){
                alert("Email password combination incorrect.");
                return;
            }else if(errorCode)
        })
}

//On click button events
$(".login-btn").on("click", signIn);

module.exports();
})