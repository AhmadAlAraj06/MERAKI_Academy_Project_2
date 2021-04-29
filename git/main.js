{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}


$(document).ready(function(){
  $("#prodoption").hide();
  $("#snackcandy").hide();
  $("#breadindex").hide();
  $("#vegetabless").hide();
  $("#Deli").hide();
  $("#Dairyeggs").hide();
  $("#milkn").hide();
  $("#frooozen").hide();
  $("#breakfastc").hide();
  $("#coffetea").hide();

  
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
  $("#eggs").click(function(){
    
    $("#prodoption").hide();
    $("#Dairyeggs").show();

  });
  $("#milk").click(function(){
    
    $("#prodoption").hide();
    $("#milkn").show();

  });
  $("#frozen").click(function(){
    
    $("#prodoption").hide();
    $("#frooozen").show();

  });
  $("#breakfast").click(function(){
    
    $("#prodoption").hide();
    $("#breakfastc").show();

  });
  $("#tea").click(function(){
    
    $("#prodoption").hide();
    $("#coffetea").show();

  });
});
