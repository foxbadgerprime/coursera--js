/*
In this task you need to create a function called groceryTracker to calculate the total amount of the purchased grocery item. For this:

Include the following in the HTML File:

You need to create at least three input boxes with ID named as "grocery1" and so on.
Also Label them using <label> as "Enter first grocery amount" and so on.
Create a button that calculates the total expenditure on the grocery purchases.
Include the following in the JavaScript file:

Create a function which will accept these amount entered by users as a parameter.
Then write the logic to calculate the total amount spent on the grocery purchase.
Call this function in such a way so that after clicking on the button, it shows the total amount for the grocery purchase.
*/

let $grocery_1, $grocery_2, $grocery_3;
function groceryTracker() {
    $grocery_1 =  parseFloat(document.getElementById('grocery_1').value);
    console.log($grocery_1);

    $grocery_2 = parseFloat(document.getElementById('grocery_2').value);
    console.log($grocery_2);

    $grocery_3 = parseFloat(document.getElementById('grocery_3').value);
    console.log($grocery_3);

    let $grocery_total = ($grocery_1 + $grocery_2 + $grocery_3);
    document.getElementById('result').innerText = `The total for your groceries: ${$grocery_total.toFixed(2)}`;
}


