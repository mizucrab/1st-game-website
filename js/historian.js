var questionNumM = 0;
var questionNumC = 0;
var questionNumA = 0;
var questionNumH = 0;
var pointsH = 0;
var counter = 0;
var arrayRandomNumbersH = [];
var correctAnswer;
RandomNumberH();
var secondsLeft = 10;
var timerInterval;


function startTimerH() {
    $(".timertext").text(secondsLeft);
    clearInterval(timerInterval); // clear previous interval
    timerInterval = setInterval(function() {
        secondsLeft--;
        $(".timertext").text(secondsLeft);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            if (questionNumH < qnum) {
                questionNumH++;
                ShowQuestionH(questionNumH);
            } else {
                if (pointsH == 5 || pointsH == 4) {
                    $("#questions").hide();
                    $("#WIN").css("display", "block");
                    $(".next").css("display", "block");
                } else {
                    $("#questions").hide();
                    $("#lose").css("display", "block");
                    $(".next").css("display", "block");
                }
            }
            secondsLeft = 10; // reset timer
            startTimerH(); // start timer again
        }
    }, 1000);
}

function RandomNumberH() {
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
        arrayRandomNumbersH.push(newNum)
    }
   
}

function ExtractQuestion(msg) {
    //console.log(msg)
    var perquestionH = msg.split("*")
    var arrayQuestionH = [];
    for (x = 0; x < perquestionH.length; x++) {
        token = perquestionH[x].trim().split("\n");
        var objQuestionH = {}
        objQuestionH.img = token[0]
        objQuestionH.colored = token[1]
        objQuestionH.question = token[2]
        objQuestionH.first = token[3]
        objQuestionH.second = token[4]
        objQuestionH.third = token[5]
        objQuestionH.fourth = token[6]
        objQuestionH.ans = token[7]
            //console.log(objQuestion)
        arrayQuestionH.push(objQuestionH)


    }
    return (arrayQuestionH)
}





function ShowQuestionH(num) {
    console.log(2100, num, arrayRandomNumbersH);
    console.log("questionNumH:", questionNumH);
    var randnum = arrayRandomNumbersH[num];
    var questionObj = Arrayhistorian[randnum];
    if (questionObj) {
        correctAnswer = questionObj.ans;
        $("#img").prop("src", "img/historianimgb/" + questionObj.img);
        $("#imgcolored").prop("src", "img/Historianimg/" + questionObj.colored.trim());
        $("#questions").text(questionObj.question.trim());
        $("#first").text(questionObj.first.trim());
        $("#second").text(questionObj.second.trim());
        $("#third").text(questionObj.third);
        $("#fourth").text(questionObj.fourth);
        $("#txtAnswer").val(questionObj.ans);
        
        secondsLeft = 10;
        startTimerH();
        questionNumH++;
    } else {
        console.log("Question object is undefined!");
    }
}