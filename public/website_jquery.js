$(document).ready(function(){

  var boxDivs = {home: $("#photoFrame"), about: $("#aboutTextBox"), contact: $('#contactTextBox'), muayThai: $('#triviaMuayThai'), bjj: $('#triviaBjj')};

  var boxText = {home: "./lib/erb/photo.erb", about: "./lib/erb/about.erb", contact: "./lib/erb/contact.erb", muayThai: "./lib/erb/muayThai.erb", bjj: "./lib/erb/bjj.erb"};

  var openBoxes = {home: true, about: false, contact: false, muayThai: false, bjj: false};

  var boxPosition = {home: "83%", about: "95%", contact: "91%", muayThai: "87%", bjj: "87%"};

  var homePositions = {width: 220, height: 220, padding: "+=0"};
  var aboutPositions = {width: 900, height: 490, padding: "+=30"};
  var contactPositions = {width: 400, height: 200, padding: "+=30"};
  var triviaPositions = {width: 900, height: 490, padding: "+=30"};

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
    $("#photoFrame").animate({top: "20%"}, 500)
      .animate({right: "0%"}, 500)
      .animate({width: 220, height: 220}, 500)
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
