<?php
$file_content= array();
$character = GetFile("Characters2.csv");
$musician = GetFile("musician4.csv");
$athlete= GetFile("athlete.csv");
$historian = GetFile("historian.csv");
array_push($file_content,$character);
array_push($file_content,$musician);
array_push($file_content,$athlete);
array_push($file_content,$historian);
echo json_encode($file_content);


function GetFile($filename){
$res  =  "";
$path  = "C:\\xampp\htdocs\\mystery\\".$filename;  
$file = fopen($path,"r");

 while(!feof($file)) {
   $res1=fgets($file)."";
   $res= $res.$res1;
 }
 
fclose($file); 
return ($res);
}
?>