{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}


$(document).ready(function(){
  $("#prodoption").hide();
  $("#snackcandy").hide();
  $("#breadindex").hide();
  $("#vegetabless").hide();
  $("#Deli").hide();

  
  $("#menue").click(function(){
    
    $("#main").hide();
    $("#prodoption").show();

  });

  $("#snackb").click(function(){
    
    $("#prodoption").hide();
    $("#snackcandy").show();

  });
  $("#breads").click(function(){
    
    $("#prodoption").hide();
    $("#breadindex").show();

  });
  $("#fruit").click(function(){
    
    $("#prodoption").hide();
    $("#vegetabless").show();

  });
   $("#chiken").click(function(){
    
    $("#prodoption").hide();
    $("#Deli").show();

  });
});
