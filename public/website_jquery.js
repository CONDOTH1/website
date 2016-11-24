$(document).ready(function(){

  var boxDivs = {home: $("#photoFrame"), about: $("#aboutTextBox"), contact: $('#contactTextBox'), muayThai: $('#triviaMuayThai'), bjj: $('#triviaBjj'), travel: $('#triviaTravel'), portfolio: $('#portfolioBox')};

  var boxText = {home: "./lib/erb/photo.erb", about: "./lib/erb/about.erb", contact: "./lib/erb/contact.erb", muayThai: "./lib/erb/muayThai.erb", bjj: "./lib/erb/bjj.erb", travel: "./lib/erb/travel.erb", portfolio: "./lib/erb/portfolio.erb"};

  var openBoxes = {home: true, about: false, contact: false, muayThai: false, bjj: false, travel: false, portfolio: false};

  var boxPosition = {home: "79%", about: "87%", contact: "83%", muayThai: "91%", bjj: "91%", travel: "91%", portfolio: "95%"};

  var homePositions = {width: '20em', height: '20em', padding: "+=0", top: "25%"};
  var aboutPositions = {width: '80%', height: '70%', padding: "+=30", top: "18%"};
  var contactPositions = {width: 400, height: 200, padding: "+=30",top: "25%"};
  var triviaPositions = {width: '80%', height: '70%', padding: "+=30",top: "18%"};
  var portfolioPositions = {width: '80%', height: '60%', padding: "+=30", top: "25%"};


  websiteStartAnimation();

  $('#home').click(function(){
    if (animationNotRunning()) {
      openBox("home", homePositions);
      $("#quote").delay(3000).fadeIn("slow");
    }
  });

  $('#about').click(function(){
    if (animationNotRunning()) {
      openBox("about", aboutPositions);
    }
  });

  $('#contact').click(function(){
    if (animationNotRunning()) {
      openBox("contact", contactPositions);
    }
  });

  $('#muayThai').click(function(){
    if (animationNotRunning()) {
      openBox("muayThai", triviaPositions);
    }
  });

  $('#bjj').click(function(){
    if (animationNotRunning()) {
      openBox("bjj", triviaPositions);
    }
  });

  $('#travel').click(function(){
    if (animationNotRunning()) {
      openBox("travel", triviaPositions);
    }
  });

  $('#portfolio').click(function(){
    if (animationNotRunning()) {
      openBox("portfolio", portfolioPositions);
    }
  });

  function openBox(box, positions) {
    if (openBoxes[box] === false) {
      var element = closeBoxes();
      $.when(element).then(function() {
        Box.animateForward(boxDivs[box], boxText[box], positions);
        openBoxes[box] = true;
      });
    }
  }

  function closeBoxes() {
    for (var key in openBoxes) {
      if (openBoxes[key] === true) {
        Box.animateReverse(boxDivs[key], boxPosition[key]);
        openBoxes[key] = false;
        return boxDivs[key];
      }
    }
  }

  function websiteStartAnimation(){
    $("#photoFrame").animate({top: "25%"}, 500)
      .animate({right: "0%"}, 500)
      .animate({width: '20em', height: '20em'}, 500)
      .animate({borderWidth: 5}, "slow");
    $("#photoFrame").load("./lib/erb/photo.erb");
    loadQuote();
  }

  function loadQuote(){
    $("#quote").load("./lib/erb/quote.erb");
    for (var key in boxDivs) {
      if (boxDivs[key] !== 'home') {
        boxDivs[key].load(boxText[key]);
      }
    }
  }

  function animationNotRunning(){
    return $(':animated').length === 0;
  }
});
