$(document).ready(function(){

  var boxDivs = {home: $("#photoFrame"), about: $("#aboutTextBox"), contact: $('#contactTextBox'), sports: $('#triviaSport'), movies: $('#triviaMovies')};

  var boxText = {home: "./lib/erb/photo.erb", about: "./lib/erb/about.erb", contact: "./lib/erb/contact.erb", sports: "./lib/erb/sports.erb", movies: "./lib/erb/movies.erb"};

  var openBoxes = {home: true, about: false, contact: false, sports: false, movies: false};

  var boxPosition = {home: "83%", about: "95%", contact: "91%", sports: "87%", movies: "87%"};

  var homePositions = {width: 220, height: 220, padding: "+=0"};
  var aboutPositions = {width: 800, height: 500, padding: "+=30"};
  var contactPositions = {width: 400, height: 200, padding: "+=30"};
  var triviaPositions = {width: 800, height: 500, padding: "+=30"};

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

  $('#sports').click(function(){
    if (animationNotRunning()) {
      openBox("sports", triviaPositions);
    }
  });

  $('#movies').click(function(){
    if (animationNotRunning()) {
      openBox("movies", triviaPositions);
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
