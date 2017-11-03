<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  </head>
  <body>
    
    <div class="container">
    <br>
    <h1 class="display-4">jquery 3 - get </h1>
    <br>
    <div id="change"> This is the old text </div>
    <button id="btnGet"> click to AJAX</button>
    </div>



</body>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
<script> 
var n = 0;

$(document).ready(function(){

    $("#btnGet").click(function(){
      changeText("#change","this is the new text");
    });


});
// this function only brings a string, whatever the data is at text.php
  function changeText(elemID, replacementTxt){
    console.log("changeText", elemID, replacementTxt + n);
    $.get("text.php", function(data, status){
            // alert("Data: " + data + "\nStatus: " + status);
            $(elemID).html(data);
        });
  
    n++;


  };

</script>

</html>
