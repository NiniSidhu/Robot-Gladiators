var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100; 
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12; 

console.log(enemyNames);

for(var i = 0 ; i < enemyNames.length ; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + " index ");
}

var fight = function(){
    window.alert("Welcome to Robot Gladiators!");
    var promtFight = window.prompt("Would you like to FIGHT or SKIP this battle?");
        if (promtFight === "fight" || promtFight === "Fight"){
            enemyHealth = enemyHealth - playerAttack
            
            console.log(
                playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining.  "
            );
                if (enemyHealth <= 0){
                    window.alert(enemyNames + " has died! ");
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
                }
                else{
                    window.alert(playerName + " still has " + playerHealth + " health left. ");
                }
        
        }

        else if (promtFight === "skip" || promtFight === "SKIP"){
            window.alert(playerName + " has chosen to skip the fight!" );
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                if (confirmSkip){
                    window.alert=(playerName + " has decided to skip this fight. Goodbye! ");
                    playerMoney = playerMoney -2;
                }

                else{
                    fight();
                }
        }

        else{
            window.alert("You need to chppse a valid option. Try again!");
        }
    
    

};


//fight();

