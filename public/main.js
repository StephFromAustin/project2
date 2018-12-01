$(document).ready(function () {
  //CSS-Javascript scripts for page visual functionality
  //============================================================================================
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const container = document.querySelector(".container2");

// PARALAX CODE TO HOME PAGE
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

  //event listeners for mouse actions on elements
  left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
  });

  left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
  });

  right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
  });

  right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
  });
  
//======================================================================================================================
// Javascript for visualization when user first signs in
const user = require("login.js");

let uid = user[1];
let email = user[0];


//Javascript for visualization of data from the database
//======================================================================================================================
// for creating an event from the create event page
// the events name input
let eventName = $(".validate");
//the date picked for the event
let eventDate = $(".datepicker");

//event listener for the button click
$(document).on("click", ".createBtn", createEvent);


});
