

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10; 
var playerMoney = 10; 

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"]; // Defined 3 enemy robot names in an array!
var enemyHealth = 50;
var enemyAttack = 12; 

/*console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);*/


var fight = function(enemyName){
    
    //Alert the player that ehy are starting the round.
    window.alert("Welcome to Robot Gladiators!");

    // Adding a feature to continue fighting
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        //If player choose to fight, then fight
        if (promptFight === "fight" || promptFight === 'FIGHT'){
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
            // || function means OR, so the user can input in either way that has been listed below! 
            // else if is used as another if statement block in the event that the first if statement is false, the second
            //if statement would get initiated 

        } else if(promptFight === "skip" || promptFight === "SKIP"){
                //confirming if the player actually wants to skip the fight
                var confirmSkip = window.confirm("Are you sure you'd like to quit?") // window.confirm spits out yes and no type of alert! 
                window.alert(playerName + " has chosen to skip the fight!");
                //if yes (true) then leave the fight 
                if (confirmSkip){
                    window.alert(playerName + " has decided to skip the fight. Goodbye!");
                    //subtract the money from player's account 
                    playerMoney = playerMoney -2;
                }
                //if no (false) then go back to fight 
                else{
                    fight();
                }
        } else {
                window.alert("You need to choose a valid option. Try again!");
            }

    }   
for (var i = 0; i < enemyNames.length; i++){
        console.log(enemyNames[i]);
}      
    

 





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

/*console.log(playerName, playerAttack, playerHealth); // We could log mutiple items at once as well!
console.log(enemyNames); //Retrieves all the names of the enemies
console.log(enemyNames[0]); //Retrieves the 0th name in the array defined above
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length); // tells us the length of the Array!
//console.log(enemyNames[enemyNames.length-1]); //tells us the last element in the array. 
/* the for loop is used to display the contents of the array without individully calling them.     
the following is the convention for the for loop: 

for([initial expression]; [condition]; [increment expression]){
    statement
} 

for (var i =0; i <3; i++){
        console.log("apple", i); shows the iteration of the array in the console 
    } */