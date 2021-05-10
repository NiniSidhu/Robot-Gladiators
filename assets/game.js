var playerName = window.prompt("What is your robot's name?"); // var with a user input and a string attached
var playerHealth = 100; // var with integer number assigned 
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"]; // var with an array with 3 elements in the array
var enemyHealth = 50;
var enemyAttack = 12; 

var fight = function(enemyName){   // calling fight as a function and variable enemy Names within that function 
    while (playerHealth > 0 && enemyHealth > 0){ // while loops allows us to run the fight function WHILE the condiction given is TRUE! && is the AND logic operator that is used!
        var promtFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
            
        if (promtFight === "skip" || promtFight === "SKIP"){
            
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                window.alert=(playerName + " has decided to skip this fight. Goodbye! ");
                playerMoney = Math.max(0, playerMoney-10);
                console.log(playerMoney + " playermoney");
                break;
            }
        }
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth-damage);        
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        if (enemyHealth <= 0){
            window.alert(enemyName + " has died! ");
            playerMoney = playerMoney + 20;
            break;
            }else{
            window.alert(enemyName + " still has " + enemyHealth + " health left. ");
            }
        var damage = randomNumber(enemyAttack - 3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
        );    
        if (playerHealth <= 0){
            window.alert(playerName + " has died! ");
            break; // Allows us to jump out of the loop or simply break it.. 
            }else{
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
};

// function to start a new game 
var startGame = function(){
    // resetting player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 100;
    for(var i = 0 ; i < enemyNames.length; i++){
        
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

            var pickedEnemyName = enemyNames [i];
            enemyHealth = randomNumber();
            fight(pickedEnemyName);
            
            
            // if the player is still alive and we are not at the last enemy at the array
            if (playerHealth > 0 && i < enemyNames.length -1){
                
                //Ask if the player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next roung?");
                
                //If yes, take them to the store() function
                if (storeConfirm){ // don't need to equal to true because this itself means true
                    shop();
                }
            }
        }
        else{
            window.alert("You have lost your robot in battle! Game Khalaas");
            break;
        }  
    }

    endGame();
};



var endGame = function(){
    window.alert("The game has now ended. Let's see how you did!");
    if (playerHealth > 0 ){
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else{
        window.alert("You've lost your robot in battle.")
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm){
        startGame();
    }
    else{
        window.alert("Thank you playing Robot Gladiators! Come back soon.");
    }
};

var shop = function(){
    //Ask the player what they would like to do 
    var shopOptionPrompt = window.prompt(
    "Would you like to REFIL your health, UPGRADE your attack or LEAVE the store. Please enter one option!"
    );

    //Using switch statments to carry out multiple values and eventually carry out an action 

    switch (shopOptionPrompt){
        case "REFILL": // to support other formats of user input 
        case "refill":
            if (playerMoney >=7){
                window.alert("Refiling player's health by 20 for 7 dollars.");

                //increase the player's health
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            } 
            break; // essential to add break because there is nothing else you want the function to do or continue on to other cases
        
        case "UPGRAGE":
        case "upgrade":
            if (playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars.");

                //increase the player's attack 
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7; 
            }
            else{
                window.alert("You don't have enough money!");
            }
            break; 
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");
            break;
        
        default: 
            window.alert("You did not pick a valid option. Try again.");

            // call shop function again to force player to pick a valid option
            shop();
            break; 
    }

}

var randomNumber = function(){
    var value = Math.floor(Math.random()*(21))+40;

    return value; // returns the value of the of the random number between 40 to 60. 
    
    /*var randomNumber = function(min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min);
      
        return value;*/

}

startGame();