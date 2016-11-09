var TriviaBox = (function () {

  var isOpen = false;
  var sportsIsOpen = false;
  var moviesIsOpen = false;
  var movieDiv = $('#triviaMovies');
  var sportDiv = $('#triviaSport');
  var movieAnchor = "<a id='movies'>Movies</a>";
  var sportAnchor = "<a id='sports'>Sports</a>";
  var movieAnchor = "<li><a id='movies' style='float:right;'>Movies</a></li>";
  var sportAnchor = "<li><a id='sports'>Sports</a></li>";

  var boxStatus = [sportsIsOpen, moviesIsOpen];
  var triviaDivs = [sportDiv, movieDiv];
  var triviaPos = ["14%", "0%"];

  function loadContactText(){
    $("#triviaTextBox").load("./lib/trivia.html");
  }

  function reverseShort(element, delay) {
    element.animate({right: "92%"}, 500).delay(delay)
    // .animate({height: 20}, 500).delay(delay)
    // .animate({width: 20}, 500)
    // .animate({right: "92%"}, 500)
    .animate({top: "87%"}, 500)
    .animate({right: "99%"}, 200);
    element.empty();
  }

  // function forwardShort(element, delay, position, anchor){
  //   element.animate({right: "92%"}, 500).delay(delay)
  //   .animate({top: "20%"}, 500)
  //   .animate({right: position}, 500);
  //   // .animate({width: 20, height: 20}, 500);
  //   $.when(element).then(function() {
  //     $('#menu').append(anchor);
  //   });
  // }

  function forwardTall(element){
    element.animate({top: "25%"})
      .animate({right: "0%"}, 200)
      .animate({width: 800}, 500)
      .animate({height: 500}, 200)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
  }

function reverseTall(element, position){
      element.animate({borderWidth: 1}, "slow")
        .animate({padding: 0})
        .animate({width: 20, height: 20}, 500)
        .animate({right: position}, 200)
        .animate({top: "20%"});
    }

function closeTall() {
    for (var i = 0; i < boxStatus.length; i++) {
      if (boxStatus[i] === true) {
        closeElement = triviaDivs[i];
        reverseTall(triviaDivs[i], triviaPos[i]);
        boxStatus[i] = false;
        return triviaDivs[i];
      }
    }
}


  return {

    status: function() {
      return isOpen;
    },

    element: function() {
      return $('#triviaSport, #triviaMovies');
    },

    setSportsOpen: function() {
      boxStatus[0] = true;
    },

    setMoviesOpen: function() {
      boxStatus[1] = true;
    },

    animateReverse: function() {
      if (isOpen) {
        // var closeElement = closeTall();
        closeTall();
        // $.when(movieDiv).done(function() {
        // closeElement.queue(function() {
        // console.log(closeElement);
          reverseShort(sportDiv, 0);
          reverseShort(movieDiv, 0);
          isOpen = false;
        // });
          // reverseShort(sportDiv, 0);
          // reverseShort(movieDiv, 1000);
          // isOpen = false;
        // });
      }
    },

    animateForward: function() {
      forwardShort(movieDiv, 0, "0%", movieAnchor);
      forwardShort(sportDiv, 1000, "14%", sportAnchor);
      isOpen = true;
      },

    animateTall: function(element){
      var closeElement = closeTall();
        $.when(closeElement).then(function() {
          forwardTall(element);
        });
    },

};
})();
