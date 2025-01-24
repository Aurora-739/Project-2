document.addEventListener("DOMContentLoaded", function()){
    
//BUTTONS FOR THE ONCLCIK FUCNTION
let higher = document.getElementById("higher");
let lower = document.getElementById("lower");
let buttons = document.getElementsByClassName("buttons")

for (let button of buttons) {
    button.addEventListener(this.onclick, function(){
        if (getAttribute("valueOfCard") > higher) {
            //end the loop --> display alert and add to losing score
        } else if (getAttribute("valueOfCard") > lower)
            //continue the loop --> display alert add to the winning score 
    });
}

    //RANDOM IMAGE GENERATOR
    function(buttons(onclick)) {
        const imgEl=
    }
    
};