
var questionNumM = 0;
var questionNumC = 0;
var pointsC = 0;
var counter = 0;
 var arrayRandomNumbersC = [];
var correctAnswer;

 RandomNumberC();   

 var secondsLeft = 10;
 var timerInterval;
 
 
 function startTimerC() {
   $(".timertext").text(secondsLeft);
   clearInterval(timerInterval); // clear previous interval
   timerInterval = setInterval(function() {
     secondsLeft--;
     $(".timertext").text(secondsLeft);
     if (secondsLeft == 0) {
       clearInterval(timerInterval);
       if (questionNumC < qnum) {
         questionNumC++;
         ShowQuestionC(questionNumC);
       } else {
         if (pointsC == 5 || pointsC == 4) {
           $("#questions").hide();
           $("#WIN").css("display","block");
           $(".next").css("display","block");
         } else {
           $("#questions").hide();
           $("#lose").css("display","block");
           $(".next").css("display","block");
         }
       }
       secondsLeft = 10; // reset timer
       startTimerC(); // start timer again
     }
   }, 1000);
 }
 function RandomNumberC() {
   var num = 5;
   var status = [];
   for (x = 0; x < num; x++) {
     status.push(false)
   }
   for (x = 0; x <= num; x++) {
     do {
       var newNum = Math.floor(Math.random() * 25);
     } while (status[newNum] == true)
     status[newNum] = true
     arrayRandomNumbersC.push(newNum)
   }
 }
 function ExtractQuestion(msg) {
   //console.log(msg)
       var perquestionC = msg.split("***")//
     var arrayQuestionC=[];//
   for (x = 0; x < perquestionC.length; x++) {//
       token = perquestionC[x].trim().split("\n");//
       var objQuestionC = {};//
       
       objQuestionC.img = token[0]//gabos
       objQuestionC.colored = token[1]
       objQuestionC.question = token[2]
       objQuestionC.first = token[3]
       objQuestionC.second = token[4]
       objQuestionC.third = token[5]
       objQuestionC.fourth = token[6]
       objQuestionC.ans = token[7]
     
       //console.log(objQuestion)
       arrayQuestionC.push(objQuestionC)//

   
 }
 return(arrayQuestionC)//
 }


 function ShowQuestionC(num) {//
   console.log(2100, num, arrayRandomNumbersC);
   console.log("questionNumC:", questionNumC);//
   var randnum = arrayRandomNumbersC[num];
   var questionObj = Arraycharacters[randnum];
   if (questionObj) {
     correctAnswer = questionObj.ans;
     $("#counter").text(counter + "/5");
     $("#points").text(pointsC + "/5");//
     $("#img").prop("src", "img/characters/" + questionObj.img.trim());//  
     $("#imgcolored").prop("src", "img/charactersimg/" + questionObj.colored.trim());//originalcharters
     $("#questions").text(questionObj.question.trim());
     $("#first").text(questionObj.first.trim());
     $("#second").text(questionObj.second.trim());
     $("#third").text(questionObj.third);
     $("#fourth").text(questionObj.fourth);
     $("#txtAnswer").val(questionObj.ans);
  

    
 
     questionNumC++;//
     secondsLeft = 10;
     startTimerC();
   
   } else {
     console.log("Question object is undefined!");
     
   }
 }
 
     
     
     
     
 