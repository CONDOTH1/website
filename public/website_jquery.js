$(document).ready(function(){
  $('#about').click(function(){
    aboutTextBox();
    loadAboutText();
  });

  $('#contact').click(function(){
    $("#contactTextBox").animate({left: "-45%"}, 1000)
    .animate({top: "5%"}, 2000)
    .animate({left: "0%"}, 2000)
    .animate({width: 400}, 1000)
    .animate({height: 200}, 400)
    .animate({padding: "+=30px"})
    .animate({borderWidth: 5}, "slow");
  });

  $('#news').click(function(){
    Website.contactOpen();
  });

  function aboutTextBox(){
    console.log($("#aboutTextBox").parent().height());
    $("#aboutTextBox").animate({top: "5%"}, 2000)
    .animate({left: "0%"}, 2000)
    .animate({width: 800}, 1000)
    .animate({height: 800}, 400)
    .animate({padding: "+=30px"})
    .animate({borderWidth: 5}, "slow");
  }

  function loadAboutText(){
    $("#aboutTextBox").load("about.html");
  }
});
