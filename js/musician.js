var questionNumM = 0;
var questionNumC = 0;
var pointsM = 0;
var counter = 0;
var arrayRandomNumbersM = [];
 var correctAnswer;

RandomNumberM();   
var secondsLeft = 10;
var timerInterval;


function startTimerM() {
  $(".timertext").text(secondsLeft);
  clearInterval(timerInterval); // clear previous interval
  timerInterval = setInterval(function() {
    secondsLeft--;
    $(".timertext").text(secondsLeft);
    if (secondsLeft == 0) {
      clearInterval(timerInterval);
      if (questionNumM < qnum) {
        questionNumM++;
        ShowQuestionM(questionNumM);
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
      startTimerM(); // start timer again
    }
  }, 1000);
}

function RandomNumberM() {
  var num = 5;
  var status = [];
  for (x = 0; x < num; x++) {
    status.push(false)
  }
  for (x = 0; x < num; x++) {
    do {
      var newNum = Math.floor(Math.random() * 20);
    } while (status[newNum] == true)
    status[newNum] = true
    arrayRandomNumbersM.push(newNum)
  }
 
}
function ExtractQuestion(msg) {
  //console.log(msg)
      var perquestionM = msg.split("***")
    var arrayQuestionM=[];
  for (x = 0; x < perquestionM.length; x++) {
      token = perquestionM[x].trim().split("\n");
      var objQuestionM = {};
      
      objQuestionM.img = token[0]
      objQuestionM.colored = token[1]
      objQuestionM.question = token[2]
      objQuestionM.first = token[3]
      objQuestionM.second = token[4]
      objQuestionM.third = token[5]
      objQuestionM.fourth = token[6]
      objQuestionM.ans = token[7]
    
      //console.log(objQuestion)
      arrayQuestionM.push(objQuestionM)

  
}
return(arrayQuestionM)
}
  
    
    
    
    
 function ShowQuestionM(num) {
  console.log(2100, num, arrayRandomNumbersM);
  console.log("questionNumM:", questionNumM);
  var randnum = arrayRandomNumbersM[num];
  var questionObj = Arraymusician[randnum];
  if (questionObj) {
    correctAnswer = questionObj.ans;
    $("#img").prop("src", "img/musicianimgb/" + questionObj.img);
    $("#imgcolored").prop("src", "img/musicianimg/" + questionObj.colored);
    $("#questions").text(questionObj.question.trim());
    $("#first").text(questionObj.first.trim());
    $("#second").text(questionObj.second.trim());
    $("#third").text(questionObj.third);
    $("#fourth").text(questionObj.fourth);
    $("#txtAnswer").val(questionObj.ans);
  


     questionNumM++;
     secondsLeft =10;
     startTimerM();
  } else {
    console.log("Question object is undefined!");
  }
}
    
    