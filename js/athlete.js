var questionNumM = 0;
var questionNumC = 0;
var questionNumA = 0;
var questionNumH = 0;
var pointsA = 0;
var counter = 0;
var arrayRandomNumbersA = [];
var correctAnswer;
RandomNumberA();
var secondsLeft = 10;
var timerInterval;



function startTimerA() {
    $(".timertext").text(secondsLeft);
    clearInterval(timerInterval); // clear previous interval
    timerInterval = setInterval(function() {
        secondsLeft--;
        $(".timertext").text(secondsLeft);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            if (questionNumA < qnum) {
                questionNumA++;
                ShowQuestionA(questionNumA);
            } else {
                if (pointsA === 5 || pointsA === 4) {
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
            startTimerA(); // start timer again
        }
    }, 1000);
}

function RandomNumberA() {
    var num = 5;
    var status = [];
    for (x = 0; x < num; x++) {
        status.push(false)
    }
    for (x = 0; x < num; x++) {
        do {
            var newNum = Math.floor(Math.random() * 18);
        } while (status[newNum] == true)
        status[newNum] = true
        arrayRandomNumbersA.push(newNum)
    }

}

function ExtractQuestion(msg) {
    //console.log(msg)
    var perquestionA = msg.split("*")
    var arrayQuestionA = [];
    for (x = 0; x < perquestionA.length; x++) {
        token = perquestionM[x].trim().split("\n");
        var objQuestionA = {}
        objQuestionA.img = token[0]
        objQuestionA.colored = token[1]
        objQuestionA.question = token[2]
        objQuestionA.first = token[3]
        objQuestionA.second = token[4]
        objQuestionA.third = token[5]
        objQuestionA.fourth = token[6]
        objQuestionA.ans = token[7]
            //console.log(objQuestion)
        arrayQuestionA.push(objQuestionA)


    }
    return (arrayQuestionA)
}





function ShowQuestionA(num) {
    console.log(2100, num, arrayRandomNumbersA);
    console.log("questionNumA:", questionNumA);
    var randnum = arrayRandomNumbersA[num];
    var questionObj = Arrayathlete[randnum];
    if (questionObj) {
        correctAnswer = questionObj.ans;
        $("#img").prop("src", "img/athletesimgb/" + questionObj.img);
        $("#imgcolored").prop("src", "img/athleteimg/" + questionObj.colored.trim());
        $("#questions").text(questionObj.question.trim());
        $("#first").text(questionObj.first.trim());
        $("#second").text(questionObj.second.trim());
        $("#third").text(questionObj.third);
        $("#fourth").text(questionObj.fourth);
        $("#txtAnswer").val(questionObj.ans);
        questionNumA++;
        secondsLeft = 10;
        startTimerA();
    } else {
        console.log("Question object is undefined!");
    }
}