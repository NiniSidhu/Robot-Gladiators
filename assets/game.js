var playerName = window.prompt("What is your robot's name?"); // var with a user input and a string attached
var playerHealth = 100; // var with integer number assigned 
var playerAttack = 25;
var playerMoney = 100;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"]; // var with an array with 3 elements in the array
var enemyHealth = 10;
var enemyAttack = 12; 

var fight = function(enemyNames){   // calling fight as a function and variable enemy Names within that function 
        while (playerHealth > 0 && enemyHealth > 0){ // while loops allows us to run the fight function WHILE the condiction given is TRUE! && is the AND logic operator that is used!
            var promtFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
            
            if (promtFight === "skip" || promtFight === "SKIP"){
                window.alert(playerName + " has chosen to skip the fight!" );
                var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                    if (confirmSkip){
                        window.alert=(playerName + " has decided to skip this fight. Goodbye! ");
                        playerMoney = playerMoney -10;
                        console.log(playerMoney + " playermoney");
                        break;
                    }

                    else{
                        fight();
                    }
            }
                enemyHealth = enemyHealth - playerAttack
                
                console.log(
                    playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.  "
                );
                    if (enemyHealth <= 0){
                        window.alert(enemyNames + " has died! ");
                        playerMoney = playerMoney + 20;
                        break;
                    }
                    else{
                        window.alert(enemyNames + " still has " + enemyHealth + " health left. ");
                    }
                playerHealth = playerHealth - enemyAttack;
                console.log(
                    enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
                );    
                    if (playerHealth <= 0){
                        window.alert(playerName + " has died! ");
                        break; // Allows us to jump out of the loop or simply break it.. 
                    }
                    else{
                        window.alert(playerName + " still has " + playerHealth + " health left. ");
                    }
            //else{
               // window.alert("You need to chppse a valid option. Try again!");
            //}
        }
    
};
var startGame = function(){
    for(var i = 0 ; i < enemyNames.length; i++){
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 100;
        
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

            var pickedEnemyName = enemyNames [i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            // enter shop option if we are not at the last enemy in the array
            if (i<enemyNames.length -1){
                shop();
            }
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
}

var shop = function(){
    //Ask the player what they would like to do 
    var shopOptionPrompt = window.prompt("Would you like to REFIL your health, UPGRADE your attack or LEAVE the store. Please enter one option!");

    //Using switch statments to carry out multiple values and eventually carry out an action 

    switch (shopOptionPrompt){
        case "REFIlL": // to support other formats of user input 
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

startGame();