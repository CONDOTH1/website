$(document).ready(function(){

  var boxDivs = {home: $("#photoFrame"), about: $("#aboutTextBox"), contact: $('#contactTextBox'), sports: $('#triviaSport'), movies: $('#triviaMovies')};

  var boxText = {home: "./lib/photo.html", about: "./lib/about.html", contact: "./lib/contact.html", sports: "./lib/sports.html", movies: "./lib/movies.html"};

  var openBoxes = {home: true, about: false, contact: false, sports: false, movies: false};

  var boxPosition = {home: "83%", about: "95%", contact: "91%", sports: "87%", movies: "87%"};

  var homePositions = {width: 220, height: 220, padding: "+=0"};
  var aboutPositions = {width: 800, height: 500, padding: "+=30"};
  var contactPositions = {width: 400, height: 200, padding: "+=30"};
  var triviaPositions = {width: 800, height: 500, padding: "+=30"};

  websiteStart();

  $('#home').click(function(){
    openBox("home", homePositions);
    $("#quote").delay(3000).fadeIn("slow");
});

  $('#about').click(function(){
      openBox("about", aboutPositions);
  });

  $('#contact').click(function(){
    openBox("contact", contactPositions);
  });

  $('#sports').click(function(){
    openBox("sports", triviaPositions);
    });

  $('#movies').click(function(){
    openBox("movies", triviaPositions);
    });

  function openBox(box, positions) {
    if (openBoxes[box] === false) {
      var element = closeBoxes();
      $.when(element).then(function() {
        Box.animateForward(boxDivs[box], boxText[box], positions);
        openBoxes[box] = true;
      })
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

  function websiteStart(){
    $("#photoFrame").animate({top: "20%"}, 500)
      .animate({right: "0%"}, 500)
      .animate({width: 220, height: 220}, 500)
      .animate({borderWidth: 5}, "slow");
    $("#photoFrame").load("./lib/photo.html");
    loadQuote();
  }

  function loadQuote(){
    $("#quote").load("./lib/quote.html");
    $("#aboutTextBox").load("./lib/about.html");
    $.when($("#aboutTextBox")).then(function(){
      $("#aboutTextBox").contents().fadeOut()
    });
    $("#contactTextBox").load("./lib/contact.html");
    $.when($("#contactTextBox")).then(function(){
      $("#contactTextBox").contents().fadeOut()
    });
    $("#triviaSport").load("./lib/sports.html");
    $.when($("#triviaSport")).then(function(){
      $("#triviaSport").contents().fadeOut()
    });
    $("#triviaMovies").load("./lib/movies.html");
    $.when($("#triviaMovies")).then(function(){
      $("#triviaMovies").contents().fadeOut()
    });
//     for (var key in boxDivs) {
//       if (key !== "home") {
//         boxDivs[key].load(boxText[key])
//         // $.when(boxDivs[key]).then(function(){
//         //   console.log('test');
//         //   boxDivs[key].contents().fadeOut();
//         // })
//     }
//   }
//   for (var key in boxDivs) {
//     if (key !== "home") {
//       // boxDivs[key].load(boxText[key])
//       // $.when(boxDivs[key]).then(function(){
//       //   console.log('test');
//         boxDivs[key].contents().fadeOut();
//       // })
//   }
// }

  }
});
