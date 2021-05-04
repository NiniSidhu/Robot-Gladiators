/* Window.Alert function provides the user with an alert. The user cannot continue without acknowledging the alert!
 Window refers to the browser iteself in the above and hence will alaways be present! 
 Alert is refered to as a Function of JS. One of many!
 Content is is always placed in quites in JS; called assing an argument into a function 
 ; a semicolon closes the alert function code. 
// window.alert("This is an alert! JavaScript is running!"); 

var playerName = window.prompt("What is your robot's name?"); // Promts the user for input
//"var" aka variable is used to store the value that the user has inputed under variable name playerName in this case. 
// JS cannot understand hyphens... so use Camel Casing!
// Console logs show in Chrome Dev Tools; used mainly for coding in JS 
console.log(playerName);
console.log("This logs a string, good for leaving yourself a message");
// This console log will do Math 
console.log(10+10);
//Will shoot out a variable along with a string and the + sign is needed for different arguments 
console.log("Our robot's name is" + playerName);

// Data Types 

 //var stringDataType = "String data type; aka text "
 //var numberIntegerDataType = 10;
 //var numberFloatDataType = 10.4;
// var booleanDataType = true;



// This creates a function named "Fight"
function fight(){
    window.alert("The fight has begun!");
}
//fight(); // This calls the function fight!

// "Function" is the function with name fight 
// () are the function paranteses 
// When declaring a function we use the keyword "Function" */

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10; 

console.log(playerName, playerAttack, playerHealth); // We could log mutiple items at once as well!

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12; 

var fight = function(){
    
    //Alert the player that ehy are starting the round.
    window.alert("Welcome to Robot Gladiators!");

    // Subtract value of playerAttack from the value of enemyHealth and use that result to update the value in the enemyHealth variable. 
    enemyHealth = enemyHealth - playerAttack;
    // Log a resulting message to the console to confirm that it worked
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth +" health remaining ");
    // Checking enemy health using if else statements 
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // Subtract the value of enemyAttack from the value of playerHealth and use that result to update the value in the playerHealth variable 
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console to confirm that it worked
    console.log(enemyName + " attacked " + playerName + ". "+ playerName + " now has " + playerHealth + " health remaining. ");
    // Checking our health using if else statements 
    if (playerHealth <= 0){
        window.alert(playerName + " has died!");
    }
    else{
        window/alert(playerName + " still has " + playerHealth + " health left.");
    }




}   

fight();



