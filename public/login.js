$(document).ready(function () {
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

    //Firebase authentication reference
    const auth = firbase.auth();
    const dB = firebase.database();
    const user = firebase.auth().currentUser;

    //handles the sign in
    const signIn = () => {
        if (user) {
            auth.signOut();
        } else {
            let email = $(".email-input").val().trim();
            let password = $(".password-input").val().trim();
            workingUser = email;
            //if the email is not correctly input
            if (email.length < 9) {
                alert("Please enter a valid email address");
                return;
            } else if (password.length < 8) {
                alert("Please enter a valid password");
                return;
            }
            //starting the sign in process
            auth.signInWithEmailAndPassword(email, password).catch(function (error) {
                //error variables
                let errorCode = error.code;
                let errorMsg = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert("Email password combination incorrect.");
                    return;
                } else if (errorCode) {
                    alert(error.message);
                }
            });
        }
    }

    //handles the sign up process
    const signUp = () => {
        let email = $(".email-input").val().trim();
        let password = $(".password-input").val().trim();
        //enter validation for e-mail
        if (email.length < 9) {
            alert("Please enter a valid email address");
            return;
        }
        if (password.length < 8 || password.match(/[A-z]/) || password.match(/[A-Z]/) || password.match(/\d/)) {
            alert("Please enter a password longer than 8 characters, has at least 1 capital letter, and 1 number.")
            return;
        }
        //creates a new user with an email and password
        auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
            let errorCode = error.code;
            let errorMsg = error.message;
            if (errorCode === "auth/weak-password") {
                alert("This password is too weak, please create a stronger password");
            } else {
                alert(errorMsg);
            }
            emailVerif();
        });
    }
const emailVerif = () =>{
    user.sendEmailVerification().then(function(){
        //this is where the user will be alerted that an email has been sent for them to verify
    })
}

const passReset = () =>{
    let email = $(".email-input").val().trim();
    auth.sendPasswordResetEmail(email).then(function() {
        //message that the password reset email was sent
    }).catch(function(error){
        let errorCode = error.code;
        let errorMsg = error.message;
        if (errorCode === "auth/invalid-email") {
            alert("Email is invalid");
            return;
        }
        if(errorCode === "auth/user-not-found") {
            alert("Email/user was not found");
            return;
        }
    })
}
    //On click button events
    $(".login-btn").on("click", signIn);
    $(".signUp-btn").on("click", signUp);
    $(".resetPass").on("click", passReset);

    module.exports();
})