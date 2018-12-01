$(document).ready(function () {
    let newEventAdd = $("#event_name");
    let eventSpace = $(".myEvents");

    $(document).on("click", ".event-btn", addEvent);

    let events = [];

    getEvents();

    //function to set up already created events when you come to the page
const showEvents = () => {
        eventSpace.empty();
        let cardsToAdd = [];
        for (let i = 0; i < events.length; i++) {
            cardsToAdd.push(createNewCard(events[i]));
        }
        eventSpace.prepend(cardsToAdd);
    }

    // Function to populate events saved in the database
const getEvents = () => {
        $.get("/api/main_event", function (data) {
            events = data;
            showEvents();
    });
}

//function to create a new card for each event made
const createNewCard = (event) => {
        let newEvent = $(
            [
                "<div class='row'>",
                "<div class='col s12 m3'>",
                "<div class='card'>",
                "< div class= 'card-image waves-effect waves-block waves-light'>",
                "<img class='activator' src='./images/img9.jpg'>",
                "</div>",
                "<div class='card-content'>",
                "<span class='card-title activator grey-text text-darken-4'>My Events<i class='material-icons right  btn-floating blue-grey darken-2 pulse'></i></span>",
                "<p><a href='./index.html'>Home</a></p>",
                "</div>",
                "<div class='card-reveal'>",
                "<span class='card-title grey-text text-darken-4'>",
                event.item,
                "<i class='material-icons right'>close</i></span>",
                "<p></p>",
                "</div>",
                "</div>",
                "</div>",
                "</div>",
                "</div>"
            ].join("")
        );
        return newEvent;
    }
//adding an event to the database
const addEvent = (event) => {
        event.preventDefault();
        let addedEvent = {
            item: newEventAdd.val().trim(),
            quantity: 0
        };
        $.post("/api/main_event", addedEvent, getEvents);
        newEventAdd.val("");
    }

});