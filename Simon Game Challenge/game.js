var userClickedPattern = [];
var gamePattern = [];

var started = false;
var buttonColors = ["red" , "blue" , "green" , "yellow"];
var level =0;

function nextseq(){
    userClickedPattern =[];
    var randomn = Math.floor(Math.random()*4) ;
    //console.log(randomn);
    var randomChosenColor = buttonColors[randomn];
    //console.log(randomChosenColor);
    //var chosenBox = ".btn " + randomChosenColor;
    //console.log(chosenBox);
    playsound(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(randomChosenColor);
    level++;
    $("h1").text("Level " + level);
    gamePattern.push(randomChosenColor);
}

$(".btn").click(function(){
    //alert("gh");
    //console.log(this.id);
    var useChosenColor = this.id;
    userClickedPattern.push(useChosenColor);

    //console.log(userClickedPattern);
    playsound(useChosenColor);

    animatePress(useChosenColor);
    var index = userClickedPattern.length - 1;
    checkanswer(index);
});

function playsound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor)
{
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    } , 100);
}

$(document).keypress(function(){
//alert("hj");
if(!started){
$("h1").text("Level 0") ;
nextseq();
started = true;}
});

function checkanswer(currentlevel){
    if(userClickedPattern[currentlevel] === gamePattern[currentlevel])
    {
        //console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextseq();
            },1000);
        }
    }
    else{
        //console.log("worng");
        playsound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startover();
    }
}
function startover(){
    level=0;
    gamePattern =[];

    started = false;
}