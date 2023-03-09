var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
muliplication();

function muliplication(){

    //if we click on start/reset button

document.getElementById("startreset").onclick = 
function(){

    //if we are playing
    if (playing== true){

        location.reload(); //reload the page
    }
    else{    //if we are not  playing

        //change mode to playing

        playing=true;

        score=0;  //set score to zero

        document.getElementById("scorevalue").innerHTML=score;

        show ("timeremaining"); //show countdown box

        timeremaining=60;

        document.getElementById("timeremainingvalue").innerHTML=timeremaining;

        

        //change button to reset

        document.getElementById("startreset").innerHTML = "Reset Game";

       
        //start countdwon
        startCountdown();

       // hide gameover
       hide("gameover");

        //generate a new q&a

        generateQuestiionandAnswers();
       
    }

}
//clicking on answer box
  
for(i=1;  i<5; i++){
    document.getElementById("choice"+ i).onclick=
    function(){
        // if we are playing
    
        if (playing == true){
            if(this.innerHTML == correctAnswer){
                //corrext answer
    
                //increase score by 1
                score ++;
                document.getElementById("scorevalue").innerHTML=score;
    
                //hide wrong box and show correct box
                hide("wrong");
                show("correct");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
                //geneate new question
                generateQuestiionandAnswers();
            }
            else{
                //wrong answer
                hide("correct");
                show("wrong");
                setTimeout(function(){
                    hide("correct");
                }, 1000);
            }
        }
    
    
    
    }   
}
  
  
   
    
//functions

//start counter
function startCountdown(){
    action =setInterval(function(){
     
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML=timeremaining;
        if (timeremaining ==0) {
            stopCountdown();

            show("gameover");

            document.getElementById("gameover").innerHTML = "<p>game over!</p><p>your score is "+ score +".</p>"

            hide ("timeremaining");
            hide ("correct");
            hide ("wrong");
            playing =false;
            document.getElementById("startreset").innerHTML="Start Game"
            
            
        }
    }, 1000)

}

//stop the counetr
function stopCountdown(){
    clearInterval(action);
}

//hide an element
function hide(id){
    document.getElementById(id).style.display = "none"
}

//show an elemnet
function show(id){
    document.getElementById(id).style.display = "block"
}

//to generate question and answers

function generateQuestiionandAnswers(){
       var x = 1 + Math.round(Math.random()*9);
       var y = 1 + Math.round(Math.random()*9);
       correctAnswer= x*y;
       document.getElementById("question").innerHTML= x + "x" + y;

       var correctPosoition = 1+ Math.round(Math.random()*3);
       document.getElementById("choice"+correctPosoition).innerHTML=correctAnswer; // fill one box with correct answer

       //fill other boxes with wrong answwewr
       var answers =[correctAnswer];
       for(i=1; i<5; i++){
        if (i != correctPosoition){
            var wrongAnswer;
            do{
                {
                    wrongAnswer = (1 + Math.round(Math.random()*9)) * (1 + Math.round(Math.random()*9));
               
                }   
            }
            while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("choice" + i).innerHTML=wrongAnswer;
              answers.push(wrongAnswer);     
        }
       }
    
}

}

