

// event listener for detecting touches

var numofbtns = document.querySelectorAll(".drum").length;

for(var i=0; i<numofbtns; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var letter = this.innerHTML;

        makesound(letter);

        btnanim(letter);

        
    });
    
};



// event listener for detecting key press


document.addEventListener("keypress", function (event) {
    makesound(event.key);

    btnanim(event.key);
});




function makesound(key){

    switch(key){
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
             break;

        case "s":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            
            break;

        case "d":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            
            break;

        case "f":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            
            break;

        case "j":  
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k": 
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;

        case "l": 
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(key);
        }

}

function btnanim(currentkey){
   var actbtn = document.querySelector("." + currentkey);
   actbtn.classList.add("pressed");
   
   setTimeout(function(){
    actbtn.classList.remove("pressed")
   },100);
   

}