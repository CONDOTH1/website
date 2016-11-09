var TriviaSportBox = (function () {

  var isOpen = false;
  var div = $('#triviaSport');

  function loadAboutText(){
    $("#aboutTextBox").load("./lib/about.html");
  }

  function unloadAboutText(){
    $('#triviaSport').empty();
  }

  return {


    status: function() {
      return isOpen;
    },

    element: function() {
      return div;
    },

    animateForward: function() {
      $('#triviaSport').animate({right: "92%"}, 200)
      .animate({top: "18%"}, 500)
      .animate({right: "0%"}, 500)
      .animate({width: 800}, 500)
      .animate({height: 500}, 200)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
      // loadAboutText();
      isOpen = true;
    },

    animateReverse: function() {
      if (isOpen) {
        $('#triviaSport').animate({borderWidth: 1}, "slow")
        .animate({padding: 0})
        .animate({height: 20}, 200)
        .animate({width: 20}, 500)
        .animate({right: "92%"}, 500)
        .animate({top: "95%"}, 500)
        .animate({right: "99%"}, 200);
        // unloadAboutText();
        isOpen = false;
      }
    }
};
})();
