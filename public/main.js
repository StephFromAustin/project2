$(document).ready(function () {
  //CSS-Javascript scripts for page visual functionality
  //============================================================================================
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const container = document.querySelector(".container2");

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
  // Code for modal to work
  $('.modal').modal();

  // Code for the side nav on smaller screens
  $('.sidenav').sidenav();

  //======================================================================================================================
  // Javascript for visualization when user first signs in

  //Javascript for visualization of data from the database
  //======================================================================================================================
  // for creating an event from the create event page
  // the events name input
  let eventName = $(".validate");
  //the date picked for the event
  let eventDate = $(".datepicker");

  //event listener for the button click



});
