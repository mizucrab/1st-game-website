<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/home.css">
    <script type="text/javascript" src="js/jquery-min.js"></script>  
    <title>Document</title>
    <link rel="icon" href="img/icon.ico">
</head>
<body>
    <div id="homepage">
        <div id="bg" ><img id="background" src="img/background.jpg" alt=""></div>
        <div id="titlebox">
            
                <div id="bgtitle"><img src="img/titleborder.png" alt="" id="titlebackground">
               <div id="bgtransparent"></div>
                </div>
            
                <div id="titletext">PoK<sup>é</sup>MoN</div>
                <div id="titletext2">Mystery Mania</div>
        </div>
         <div id="start"> Click to start</div>
        </div>

    <div id="category">
        <div id="catbg">

       <div id="cardbox">
        <div id="cattitle">
            <div id="cattitletext">Mystery Mania</div>
            <div id="instructions">Please select a category</div>
        </div>
        <div class="card" id="athleteC">
             <div class="image"> <img src="img/inceneror.png" alt="" class="topimage"></div>
             <div class="cattitle">Athletes</div>
             <div class="cattext">
                
                <div class="textdescription">
                     <P>_Guess the Athlete from Silhouette! Identify famous sports stars from their shadowy outlines. Put your sports knowledge to the test and see if you can recognize iconic athletes from various disciplines. Are you up for the challenge?</P>
                </div>
                
             </div>
             <div class="buttoncat"><button class="catbutton" id="athlete">Select</button></div>
              </div>
           <div class="card" id="musicianC">
                     <div class="image"> <img src="img/musician.png" alt="" class="topimage"></div>
                     <div class="cattitle">musician</div>
                     <div class="cattext">
                        
                        <div class="textdescription">
                             <P>_Guess the Musician from Silhouette! Identify famous musicians from their shadowy outlines. Put your music knowledge to the test and see if you can recognize iconic musicians from various countries. Are you up for the challenge?</P>
                        </div>
                        
                     </div>
                     <div class="buttoncat"><button class="catbutton" id="musician">Select</button></div>
                      </div>
                      <div class="card" id="historianC">
                        <div class="image"> <img src="img/historian.png" alt="" class="topimage"></div>
                        <div class="cattitle">historians</div>
                        <div class="cattext">
                           
                           <div class="textdescription">
                                <P>_Guess the historian from Silhouette! Identify famous people from their shadowy outlines. Put your history knowledge to the test and see if you can recognize iconic people from history. Are you up for the challenge?</P>
                           </div>
                           
                        </div>
                        <div class="buttoncat"><button class="catbutton" id="historian">Select</button></div>
                         </div>
                         <div class="card" id="charactersC">
                            <div class="image"> <img src="img/characters.png" alt="" class="topimage"></div>
                            <div class="cattitle">characters</div>
                            <div class="cattext">
                               
                               <div class="textdescription">
                                    <P>_Guess the anime character from Silhouette! Identify characters from their shadowy outlines. Put your anime knowledge to the test and see if you can recognize iconic Characters from various anime. Are you up for the challenge?</P>
                               </div>
                               
                            </div>
                            <div class="buttoncat"><button class="catbutton" id="characters">Select</button></div>
                             </div>
         </div>
                        

    </div>
</div>
<div id="pokedex">
    <div id="left"> </div>
    <div id="right"></div>
<div class="halfcircleright"></div>
<div class="halfcircleleft"></div>
    <div id="dexcircle">
        <div class="dexstart">
            <div class="dextext">PLAY</div>
    </div>
</div>
</div>

    <div id="bgM" class="video-background">
         <video autoplay loop muted>
    <source src="background/musicianvid.mp4" type="video/mp4">
    </video></div>
    <div id="bgC" class="video-background">
    <video autoplay loop muted>
    <source src="background/charactersvid.mp4" type="video/mp4">
    </video>
    </div>
    <div id="bgA" class="video-background"><video autoplay loop muted>
    <source src="background/athletesvid.mp4" type="video/mp4">
    </video></div>
    <div id="bgH" class="video-background"><video autoplay loop muted>
    <source src="background/historianvid.mp4" type="video/mp4">
    </video></div>
    <div id="done" class="video-background2">
   <div id="congrats">Thank you for playing and finishing our game ^^</div>

         <video autoplay loop muted>
    <source src="background/done2.mp4" type="video/mp4">
    </video>
</div>
    

<img src="imgm/lose.gif" id="lose" >
<img src="imgm/win.gif" id="WIN" >
<div class="losetext">YOU LOSE </div>
<div class="wintext">YOU WIN</div>
<button class="next"><div id="textnext">next</div>
    </button>
<div id="question">
    <div id="container">
          <div id="questioncontainer">
        
                  <div id="questions"> this is the question</div>
                     <img id="img" class="img">
                     <img id="imgcolored" class="imgcolored">
   
    
<div id="mchoice">
             <button class="cbox" id="first">A</button>
           <button class="cbox" id="second">B</button>
             <button  class="cbox"id="third">C</button>
            <button class="cbox" id="fourth">D</button>

</div>
</div>
</div>
<div id="timer"><div class="timertext">60</div></div>

</div>  

</body>
<script type="text/javascript" src="js/historian.js"></script>
<script type="text/javascript" src="js/athlete.js"></script>
<script type="text/javascript" src="js/characters.js"></script>
<script type="text/javascript" src="js/musician.js"></script>
<script type="text/javascript" src="js/ui.js"></script>
</html>