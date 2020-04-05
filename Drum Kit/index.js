for(var i =0;i<document.querySelectorAll(".drum").length ; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click" , function()
{
    var buttoninnerhtml = this.innerHTML;
    var tom;
    switch(buttoninnerhtml)
    {
        case "w" :
            tom = new Audio("sounds/tom-1.mp3");
            tom.play();
            break;
        case "a" :
             tom = new Audio("sounds/tom-2.mp3");
            tom.play();
            break;
        case "s" :
            tom = new Audio("sounds/tom-3.mp3");
            tom.play();
            break;
        case "d" :
            tom = new Audio("sounds/tom-4.mp3");
            tom.play();
            break;
        case "j" :
            tom = new Audio("sounds/snare.mp3");
            tom.play();
            break;
        case "k" :
            tom = new Audio("sounds/kick-bass.mp3");
            tom.play();
            break;
        case "l" :
            tom = new Audio("sounds/crash.mp3");
            tom.play();
            break;
    }
});
}