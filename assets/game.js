



var fight = function(enemy){   // calling fight as a function and variable enemy Names within that function 
    while (playerHealth > 0 && enemy.Health > 0){ // while loops allows us to run the fight function WHILE the condiction given is TRUE! && is the AND logic operator that is used!
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
        enemy.Health = Math.max(0, enemy.Health-damage);        
        console.log(
        playerName + " attacked " + enemy.Name + ". " + enemy.Name + " now has " + enemy.Health + " health remaining."
        );

        if (enemy.Health <= 0){
            window.alert(enemy.Name + " has died! ");
            playerMoney = playerMoney + 20;
            break;
            }else{
            window.alert(enemy.Name + " still has " + enemy.Health + " health left. ");
            }
        var damage = randomNumber(enemy.Attack - 3, enemy.Attack);
        playerHealth = Math.max(0, playerHealth - damage);
        console.log(
        enemy.Name + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining. "
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
    // reset player info 
    playerInfo.reset();
    for(var i = 0 ; i < enemyInfo.length; i++){
        
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));

            var pickedEnemyObj = enemyNames [i];
            pickedEnemyObj.health = randomNumber(40,60);
            fight(pickedEnemyObj);
            
            
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
            playerInfo.refillHealth();
            break; // essential to add break because there is nothing else you want the function to do or continue on to other cases
        
        case "UPGRAGE":
        case "upgrade":
            playerInfo.upgradeAttack();
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
// Using custom object to have user robot specifications. 
var playerInfo = {
    name: window.prompt("What is your Robot's name?"),
    health: 100, 
    attack: 10, 
    money: 10
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10; 
    }, 
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -=7;
        }
        else{
            window.alert("You don't have enough money!");
        }
        
    },
    upgradeAttack: function(){
        if (this.money >=7){
            this.attack += 6;
            this.money -= 7;
        }
        else{
            window.alert("You don't have enough money!");
        }
         
    }
};

var enemyInfo= [
    {
        name: "Roberto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber (10,14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber (10,14)
    }
];


startGame();