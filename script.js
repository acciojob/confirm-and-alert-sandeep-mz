//your JS code here. If required.
// Display the confirmation dialog with the specified message
const confirmation = confirm("Do you want to proceed?");

// Check the user's response
if (confirmation) {
    // User clicked OK, show "Proceeding..." alert
    alert("You clicked OK. Proceeding...");
} else {
    // User clicked Cancel, show "Exiting..." alert
    alert("You clicked Cancel. Exiting...");
}