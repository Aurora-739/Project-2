document.addEventListener("DOMContentLoaded", function(){
        

        
    //BUTTONS FOR THE ONCLCIK FUCNTION
    let higher = document.getElementById("higher");
    let lower = document.getElementById("lower");
    let buttons = document.getElementsByClassName("buttons")

    for (let button of buttons) {
        button.addEventListener(this.onclick, function(){
            if (getAttribute("valueOfCard") > guess) {
                //end the loop --> display alert and add to losing score
            } else if (getAttribute("valueOfCard") > guess)
                //continue the loop --> display alert add to the winning score 
        });
    }
    var cards = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "Jack", "Queen", "King"];
    var prevCard = "";
    var randomNumber = 0;
    var numCorrect =  0;

//CHOOSES A RANDOM CARD 
    function addCard() {
        randomNumber = 0;
        var randomCard = 0;

        randomNumber = Math.floor(Math.random() * cards.length);
        randomCard = cards[randomNumber];
        while (prevCard === randomCard);
        return randomCard

    }
            
            if (valueOfCard == document.getElementsByClassName("King").value){
                // Count for cards --> give them true / false values
                function guess() {
                    if (onclick(higher)) {
                        let guess = valueOfCard > card;
                    } else if (onclick(lower)) {
                        let guess = valueOfCard < card;
                    }
                }
            }
        }


    
