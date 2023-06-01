//console.log(12234)  

GetQuestion();

var Arraycharacters;
var Arraymusician;
var Arrayathlete;
var Arrayhistorian;
var correctAnswer;
var arrayQuestionC = []
var arrayQuestionM = []
var arrayQuestionA = []
var arrayQuestionH = []

var questionNum;

qnum = 5;
var score = 0;
var questionNumM = 0;
var questionNumC = 0;
var questionNumA = 0;
var questionNumH = 0;
var pointsM = 0;
var pointsC = 0;
var pointsA = 0;
var pointsH = 0;

var m=0;
var c=0;
var h=0;
var a=0;


function GetQuestion(filename) {
  var arrayQuestion = [];
    $.ajax({
            type: "POST",
            url: "php/question.php",
            async:false,
          
        })
        .done(function(msg) {
            //console.log(msg)
var fileContent = JSON.parse(msg)

Arraycharacters = ExtractQuestion(fileContent[0]);
Arraymusician = ExtractQuestion(fileContent[1]);
Arrayathlete = ExtractQuestion(fileContent[2]);
Arrayhistorian = ExtractQuestion(fileContent[3]);


console.log(1,Arraycharacters)
console.log(2,Arraymusician)
console.log(2,Arrayhistorian)
console.log(2,Arrayathlete)


});
}


$(document).on("click", "#start", function () {
   
        $("#category").css("display", "block"); 
     
        $("#homepage").hide();
        
    
 
});


$(document).on("click", "#musician", function() {
  document.querySelector('#musician').disabled = true;
 
  $("#pokedex").css("z-index", "99");
  $("#pokedex").show();
  $("#category").hide();
 
  $("#bgM").css("display", "block")

  counter++;

 
  ShowQuestionM(questionNumM);
 
  var characterScript = document.querySelector("script[src='js/characters.js']");
  characterScript.disabled = true;
  var athleteScript = document.querySelector("script[src='js/athlete.js']");
  athleteScript.disabled = true;
  var historianScript = document.querySelector("script[src='js/historian.js']");
  historianScript.disabled = true;
  
 
});
$(document).on("click", "#characters", function() {
  document.querySelector('#characters').disabled = true;
  
  $("#pokedex").css("z-index", "99");
 
  $("#category").hide();
  $("#pokedex").show();
  $("#bgC").css("display", "block")

  counter++;
  ShowQuestionC(questionNumC);
  var musicianScript = document.querySelector("script[src='js/musician.js']");
  musicianScript.disabled = true;
  var athleteScript = document.querySelector("script[src='js/athlete.js']");
  athleteScript.disabled = true;
  var historianScript = document.querySelector("script[src='js/historian.js']");
  historianScript.disabled = true;
  

});
$(document).on("click", "#athlete", function() {

  $("#pokedex").css("z-index", "99");
  $("#category").hide();
  $("#pokedex").show();
  $("#bgA").css("display", "block")

  counter++;
  ShowQuestionA(questionNumA);
  var musicianScript = document.querySelector("script[src='js/musician.js']");
  musicianScript.disabled = true;
  var characterScript = document.querySelector("script[src='js/characters.js']");
  characterScript.disabled = true;
  var historianScript = document.querySelector("script[src='js/historian.js']");
  historianScript.disabled = true;
  document.querySelector('#athlete').disabled = true;
});
$(document).on("click", "#historian", function() {

  $("#pokedex").css("z-index", "99");
  $("#category").hide();
  $("#pokedex").show();
  $("#bgH").css("display", "block")

 
  ShowQuestionH(questionNumH);
  var musicianScript = document.querySelector("script[src='js/musician.js']");
  musicianScript.disabled = true;
  var characterScript = document.querySelector("script[src='js/characters.js']");
  characterScript.disabled = true;
  var athleteScript = document.querySelector("script[src='js/athlete.js']");
  athleteScript.disabled = true;
  document.querySelector('#historian').disabled = true;
});
$(document).on("click", "#dexcircle", function () {
    $("#dexcircle").hide();
    $("#pokeball-left").animate({ marginTop: "-360px" },500);
    $("#left").animate({ marginLeft: "-800px" }, 1000);
    $("#right").animate({ marginLeft: "1600px" }, 1000);
    $(".halfcircleleft").animate({ backgroundColor: "#0885ff",marginLeft: "-900px" }, 1000);
    $(".halfcircleright").animate({ backgroundColor: "# 0885ff",marginLeft: "900px" }, 1000);
    $("#question").show();
    setTimeout(function() {
        $("#question").css("z-index", "99");
        
        
    }, 1000);
   
});





function button(){
console.log("pontsc:",pointsC);
console.log("pontsh:",pointsH);


if (questionNumM > 0 && questionNumM < qnum) {
      if (correctAnswer == ans) {
          pointsM++;
        
          if (ans == "A"){
          $("#first").css("background-color", "green"); 
          }
          else if (ans == "B"){
            $("#second").css("background-color", "green"); 
            }
        else if (ans == "C"){
                $("#third").css("background-color", "green"); 
                }
        else if (ans == "D"){
                    $("#fourth").css("background-color", "green"); 
                    }
          $(".imgcolored").css("display", "block");
      } else {
          $(".imgcolored").css("display", "block");
          
         
          if (correctAnswer == "A") {
            $("#first").css("background-color", "green");
            if (ans == "A"){
                $("#first").css("background-color", "red"); 
                }
                else if (ans == "B"){
                  $("#second").css("background-color", "red"); 
                  }
              else if (ans == "C"){
                      $("#third").css("background-color", "red"); 
                      }
              else if (ans == "D"){
                          $("#fourth").css("background-color", "red"); 
                          }
        }
          else if (correctAnswer == "B") {
              $("#second").css("background-color", "green");
              if (ans == "A"){
                $("#first").css("background-color", "red"); 
                }
                else if (ans == "B"){
                  $("#second").css("background-color", "red"); 
                  }
              else if (ans == "C"){
                      $("#third").css("background-color", "red"); 
                      }
              else if (ans == "D"){
                          $("#fourth").css("background-color", "red"); 
                          }
          } else if (correctAnswer == "C") {
              $("#third").css("background-color", "green");
              if (ans == "A"){
                $("#first").css("background-color", "red"); 
                }
                else if (ans == "B"){
                  $("#second").css("background-color", "red"); 
                  }
              else if (ans == "C"){
                      $("#third").css("background-color", "red"); 
                      }
              else if (ans == "D"){
                          $("#fourth").css("background-color", "red"); 
                          }
          } else if (correctAnswer == "D") {
              $("#fourth").css("background-color", "green");
              if (ans == "A"){
                $("#first").css("background-color", "red"); 
                }
                else if (ans == "B"){
                  $("#second").css("background-color", "red"); 
                  }
              else if (ans == "C"){
                      $("#third").css("background-color", "red"); 
                      }
              else if (ans == "D"){
                          $("#fourth").css("background-color", "red"); 
                          }
          }
      }
      setTimeout(function () {
          $("#first").css("background-color", "white"); // Reset background color to white
          $(".imgcolored").css("display", "none");
          $("#second").css("background-color", "white"); 
          $("#third").css("background-color", "white");
          $("#fourth").css("background-color", "white");
          ShowQuestionM(questionNumM);
      }, 2000);
  } else if ( questionNumM == qnum && m == 0) {
      if (pointsM == 5 || pointsM >=4) {
          $("#questions").hide();
          $("#WIN").css("display", "block");
          $(".wintext").css("display", "block");//$(".losetext").css("display", "block");//
          $(".next").css("display", "block");
          m=1;
      } else {
          $("#questions").hide();
          $("#lose").css("display", "block");
          $(".losetext").css("display", "block");//
          $(".next").css("display", "block");
          m=1;
          
          
      }
      setTimeout(function () {
        $("#first").css("background-color", "white"); // Reset background color to white
        $(".imgcolored").css("display", "none");
        $("#second").css("background-color", "white"); 
        $("#third").css("background-color", "white");
        $("#fourth").css("background-color", "white");
        ShowQuestionM(questionNumM);
    }, 2000);
   
  } 
  else if (questionNumC > 0 && questionNumC < qnum) {
    if (correctAnswer == ans) {
        pointsC++;
     
        if (ans == "A"){
        $("#first").css("background-color", "green"); 
        }
        else if (ans == "B"){
          $("#second").css("background-color", "green"); 
          }
      else if (ans == "C"){
              $("#third").css("background-color", "green"); 
              }
      else if (ans == "D"){
                  $("#fourth").css("background-color", "green"); 
                  }
        $(".imgcolored").css("display", "block");
    } else {
        $(".imgcolored").css("display", "block");
     
       
        if (correctAnswer == "A") {
          $("#first").css("background-color", "green");
          if (ans == "A"){
              $("#first").css("background-color", "red"); 
              }
              else if (ans == "B"){
                $("#second").css("background-color", "red"); 
                }
            else if (ans == "C"){
                    $("#third").css("background-color", "red"); 
                    }
            else if (ans == "D"){
                        $("#fourth").css("background-color", "red"); 
                        }
      }
        else if (correctAnswer == "B") {
            $("#second").css("background-color", "green");
            if (ans == "A"){
              $("#first").css("background-color", "red"); 
              }
              else if (ans == "B"){
                $("#second").css("background-color", "red"); 
                }
            else if (ans == "C"){
                    $("#third").css("background-color", "red"); 
                    }
            else if (ans == "D"){
                        $("#fourth").css("background-color", "red"); 
                        }
        } else if (correctAnswer == "C") {
            $("#third").css("background-color", "green");
            if (ans == "A"){
              $("#first").css("background-color", "red"); 
              }
              else if (ans == "B"){
                $("#second").css("background-color", "red"); 
                }
            else if (ans == "C"){
                    $("#third").css("background-color", "red"); 
                    }
            else if (ans == "D"){
                        $("#fourth").css("background-color", "red"); 
                        }
        } else if (correctAnswer == "D") {
            $("#fourth").css("background-color", "green");
            if (ans == "A"){
              $("#first").css("background-color", "red"); 
              }
              else if (ans == "B"){
                $("#second").css("background-color", "red"); 
                }
            else if (ans == "C"){
                    $("#third").css("background-color", "red"); 
                    }
            else if (ans == "D"){
                        $("#fourth").css("background-color", "red"); 
                        }
        }
    }
    setTimeout(function () {
        $("#first").css("background-color", "white"); // Reset background color to white
        $(".imgcolored").css("display", "none");
        $("#second").css("background-color", "white"); 
        $("#third").css("background-color", "white");
        $("#fourth").css("background-color", "white");
        ShowQuestionC(questionNumC);
    }, 2000);
} else if (questionNumC == qnum && c == 0) {
    if (pointsC == 5 || pointsC >= 4) {
        $("#questions").hide();
        $("#WIN").css("display", "block");
        $(".wintext").css("display", "block");//$(".losetext").css("display", "block");//
        $(".next").css("display", "block");
    } else {
        $("#questions").hide();
        $("#lose").css("display", "block");
        $(".losetext").css("display", "block");//
        $(".next").css("display", "block");
    }
    setTimeout(function () {
        $("#first").css("background-color", "white"); // Reset background color to white
        $(".imgcolored").css("display", "none");
        $("#second").css("background-color", "white"); 
        $("#third").css("background-color", "white");
        $("#fourth").css("background-color", "white");
        ShowQuestionC(questionNumC);
    }, 2000);
    c=1;
} 
else if (questionNumA > 0 && questionNumA < qnum) {
  if (correctAnswer == ans) {
      pointsA++;
   
      if (ans == "A"){
      $("#first").css("background-color", "green"); 
      }
      else if (ans == "B"){
        $("#second").css("background-color", "green"); 
        }
    else if (ans == "C"){
            $("#third").css("background-color", "green"); 
            }
    else if (ans == "D"){
                $("#fourth").css("background-color", "green"); 
                }
      $(".imgcolored").css("display", "block");
  } else {
      $(".imgcolored").css("display", "block");
   
     
      if (correctAnswer == "A") {
        $("#first").css("background-color", "green");
        if (ans == "A"){
            $("#first").css("background-color", "red"); 
            }
            else if (ans == "B"){
              $("#second").css("background-color", "red"); 
              }
          else if (ans == "C"){
                  $("#third").css("background-color", "red"); 
                  }
          else if (ans == "D"){
                      $("#fourth").css("background-color", "red"); 
                      }
    }
      else if (correctAnswer == "B") {
          $("#second").css("background-color", "green");
          if (ans == "A"){
            $("#first").css("background-color", "red"); 
            }
            else if (ans == "B"){
              $("#second").css("background-color", "red"); 
              }
          else if (ans == "C"){
                  $("#third").css("background-color", "red"); 
                  }
          else if (ans == "D"){
                      $("#fourth").css("background-color", "red"); 
                      }
      } else if (correctAnswer == "C") {
          $("#third").css("background-color", "green");
          if (ans == "A"){
            $("#first").css("background-color", "red"); 
            }
            else if (ans == "B"){
              $("#second").css("background-color", "red"); 
              }
          else if (ans == "C"){
                  $("#third").css("background-color", "red"); 
                  }
          else if (ans == "D"){
                      $("#fourth").css("background-color", "red"); 
                      }
      } else if (correctAnswer == "D") {
          $("#fourth").css("background-color", "green");
          if (ans == "A"){
            $("#first").css("background-color", "red"); 
            }
            else if (ans == "B"){
              $("#second").css("background-color", "red"); 
              }
          else if (ans == "C"){
                  $("#third").css("background-color", "red"); 
                  }
          else if (ans == "D"){
                      $("#fourth").css("background-color", "red"); 
                      }
      }
  }
  setTimeout(function () {
      $("#first").css("background-color", "white"); // Reset background color to white
      $(".imgcolored").css("display", "none");
      $("#second").css("background-color", "white"); 
      $("#third").css("background-color", "white");
      $("#fourth").css("background-color", "white");
      ShowQuestionA(questionNumA);
  }, 2000);
} else if (questionNumA == qnum && a == 0 ) {
  if (pointsA == 5 || pointsA >= 4) {
      $("#questions").hide();
      $("#WIN").css("display", "block");
      $(".wintext").css("display", "block");//$(".losetext").css("display", "block");//
      $(".next").css("display", "block");
  } else {
      $("#questions").hide();
      $("#lose").css("display", "block");
      $(".losetext").css("display", "block");//
      $(".next").css("display", "block");
  }
  setTimeout(function () {
      $("#first").css("background-color", "white"); // Reset background color to white
      $(".imgcolored").css("display", "none");
      $("#second").css("background-color", "white"); 
      $("#third").css("background-color", "white");
      $("#fourth").css("background-color", "white");
      ShowQuestionA(questionNumA);
  }, 2000);
  a=1;
} 
else if (questionNumH> 0 && questionNumH < qnum) {
  if (correctAnswer == ans) {
      pointsH++;
   
      if (ans == "A"){
      $("#first").css("background-color", "green"); 
      }
      else if (ans == "B"){
        $("#second").css("background-color", "green"); 
        }
    else if (ans == "C"){
            $("#third").css("background-color", "green"); 
            }
    else if (ans == "D"){
                $("#fourth").css("background-color", "green"); 
                }
      $(".imgcolored").css("display", "block");
  } else {
      $(".imgcolored").css("display", "block");
   
     
      if (correctAnswer == "A") {
        $("#first").css("background-color", "green");
        if (ans == "A"){
            $("#first").css("background-color", "red"); 
            }
            else if (ans == "B"){
              $("#second").css("background-color", "red"); 
              }
          else if (ans == "C"){
                  $("#third").css("background-color", "red"); 
                  }
          else if (ans == "D"){
                      $("#fourth").css("background-color", "red"); 
                      }
    }
      else if (correctAnswer == "B") {
          $("#second").css("background-color", "green");
          if (ans == "A"){
            $("#first").css("background-color", "red"); 
            }
            else if (ans == "B"){
              $("#second").css("background-color", "red"); 
              }
          else if (ans == "C"){
                  $("#third").css("background-color", "red"); 
                  }
          else if (ans == "D"){
                      $("#fourth").css("background-color", "red"); 
                      }
      } else if (correctAnswer == "C") {
          $("#third").css("background-color", "green");
          if (ans == "A"){
            $("#first").css("background-color", "red"); 
            }
            else if (ans == "B"){
              $("#second").css("background-color", "red"); 
              }
          else if (ans == "C"){
                  $("#third").css("background-color", "red"); 
                  }
          else if (ans == "D"){
                      $("#fourth").css("background-color", "red"); 
                      }
      } else if (correctAnswer == "D") {
          $("#fourth").css("background-color", "green");
          if (ans == "A"){
            $("#first").css("background-color", "red"); 
            }
            else if (ans == "B"){
              $("#second").css("background-color", "red"); 
              }
          else if (ans == "C"){
                  $("#third").css("background-color", "red"); 
                  }
          else if (ans == "D"){
                      $("#fourth").css("background-color", "red"); 
                      }
      }
  }
  setTimeout(function () {
      $("#first").css("background-color", "white"); // Reset background color to white
      $(".imgcolored").css("display", "none");
      $("#second").css("background-color", "white"); 
      $("#third").css("background-color", "white");
      $("#fourth").css("background-color", "white");
      ShowQuestionH(questionNumH);
  }, 2000);
} else if (questionNumH == qnum && h == 0) {
  if (pointsH == 5 || pointsH == 4) {
    $("#questions").hide();
    $("#WIN").css("display", "block");
    $(".next").css("display", "block");
} else {
    $("#questions").hide();
    $("#lose").css("display", "block");
    $(".next").css("display", "block");
}
  setTimeout(function () {
      $("#first").css("background-color", "white"); // Reset background color to white
      $(".imgcolored").css("display", "none");
      $("#second").css("background-color", "white"); 
      $("#third").css("background-color", "white");
      $("#fourth").css("background-color", "white");
      
  }, 2000);
  h=1;
} 


}


$(document).on("click", "#first", function () {
  ans = "A";
button()
  
});

  $(document).on("click", "#second", function () {
    ans = "B";
    button()
  });
  $(document).on("click", "#third", function () {
    ans = "C";
    button()
  });
  $(document).on("click", "#fourth", function () {
    ans = "D";
    button()
  });

  
  
  $(document).on("click", ".next", function () {
    // hide the WIN and lose elements
    $("#lose").css("display","none");
    $("#WIN").css("display","none");
    
    // reset the game elements to their initial positions/colors
    $("#pokeball-left").animate({ marginTop: "0" }, 0);
    $("#left").animate({ marginLeft: "0" }, 0);
    $("#right").animate({ marginLeft: "650px" }, 0);
    $(".halfcircleleft").animate({ backgroundColor: "#0885ff", marginLeft: "0" },0);
    $(".halfcircleright").animate({ backgroundColor: "#0885ff", marginLeft: "0" },0);
  
    // show the category tab and hide the pokedex
    $("#category").show();
    $("#category").css("z-index", "99");
    $("#pokedex").css("z-index", "");
    $("#pokedex").hide();
    $("#bgM").css("display","none")
    $("#bgH").css("display","none")
    $("#bgA").css("display","none")
    $("#bgC").css("display","none")
    $("#question").hide();
    $("#dexcircle").show();
    $("#questions").css("display","block");
    $(".losetext").css("display","none")
    $(".wintext").css("display","none")
    $(".next").css("display","none")

   
      if(a==1 && h==1 && c==1 && m==1){
      $("#done").css("display", "block");
      $("#done").css("z-index", "500");
      }


  });
  