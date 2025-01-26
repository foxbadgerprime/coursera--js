let count = 0; // Initialize count to 0

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    } else if (count === 0) {
        alert("The counter has been reset");
    }
}

/*
In this task you need to create a reset button which will reset the followers count code. For this you need to include:

One button to represent Reset Count in followers_count.html file.

Then create one function in followers_count.js file to reset count to 0.

Also use alert popup box method to show alert message which will say that the Followers count has been reset.
*/

function resetCount() {
    count = 0;
    document.getElementById('countDisplay').innerHTML=count; // Set the counter to 0
    checkCountValue();
}