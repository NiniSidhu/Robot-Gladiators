var playerName = window.prompt("What is your robot's name?"); // var with a user input and a string attached
var playerHealth = 100; // var with integer number assigned 
var playerAttack = 25;
var playerMoney = 10;

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
            else{
                window.alert("You need to chppse a valid option. Try again!");
            }
        }
    
};

for(var i = 0 ; i < enemyNames.length; i++){
    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

        var pickedEnemyName = enemyNames [i];
        enemyHealth = 50;
        fight(enemyNames[i]);
    }
    else{
        window.alert("You have lost your robot in battle! Game Khalaas");
        break;
    }
    
    
}




//fight();

