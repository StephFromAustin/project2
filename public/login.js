$(document).ready(function () {
    // All of the Firebase code
    // ======================================================================================================
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
    const auth = firebase.auth();
    const user = firebase.auth().currentUser;

    //global variables
    let currentUserEmail = '';
    let currentuid = 0;

    //handles the sign in
    const signIn = () => {
        if (user) {
            auth.signOut();
        } else {
            let email = $(".email-input").val().trim();
            let password = $(".password-input").val().trim();
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
                    alert("Email/Password combination incorrect.");
                    return;
                } else if (errorCode) {
                    alert(errorMsg);
                    return;
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
    //sending out email to verify the user
    const emailVerif = () => {
        user.sendEmailVerification().then(function () {
            //this is where the user will be alerted that an email has been sent for them to verify
            alert("An e-mail has been sent to you for verification.")
        })
    }
    // function to reset the password for the user
    const passReset = () => {
        let email = $(".email-input").val().trim();
        auth.sendPasswordResetEmail(email).then(function () {
            //message that the password reset email was sent
            alert("An email has been sent for the associated password to be reset.");
        }).catch(function (error) {
            let errorCode = error.code;
            let errorMsg = error.message;
            if (errorCode === "auth/invalid-email") {
                alert("Email is invalid");
                return;
            }
            if (errorCode === "auth/user-not-found") {
                alert("Email/user was not found");
                return;
            } else {
                alert(errorMsg);
                return;
            } 
            // else if (errorCode)
        })
    }
    // Global observer of user sign in status
    auth.onAuthStateChanged(function (user) {
    if (user) {
        let emailVerified = user.emailVerified;
        currentUserEmail = user.email;
        currentuid = user.uid;
    } else {
        //user is signed out, redirect to the home page

    }
})

});
    

// Code for future development to let the user update their profile information

//======================================================================================================================
//On click button events
//Firebase button events
$(".login-btn").on("click", signIn);
$(".signUp-btn").on("click", signUp);
$(".resetPass").on("click", passReset);

    module.exports(currentuid, currentUserEmail);

// testing for github