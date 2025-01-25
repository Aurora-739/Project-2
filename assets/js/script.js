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

        //RANDOM IMAGE GENERATOR
        //!!!! function card() {
            card = new image(pathImage)
        }


    // Count for cards --> give them true / false values
    function guess() {
        if (onclick(higher)) {
            let guess = valueOfCard > card;
        } else if (onclick(lower)) {
            let guess = valueOfCard < card;
        }
    }
