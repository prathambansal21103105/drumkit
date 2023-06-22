
var numberofdrumbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofdrumbuttons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });

}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/5.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/6.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/7.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
