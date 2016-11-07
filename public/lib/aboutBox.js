var AboutBox = (function () {

  var isOpen = false;
  var div = $("#aboutTextBox");

  function loadAboutText(){
    $("#aboutTextBox").load("./lib/about.html");
  }

  function unloadAboutText(){
    $("#aboutTextBox").empty();
  }

  return {


    status: function() {
      return isOpen;
    },

    element: function() {
      return div;
    },

    animateForward: function() {
      console.log("test1");
      $("#aboutTextBox").animate({right: "92%"}, 200)
      .animate({top: "18%"}, 500)
      .animate({right: "0%"}, 500)
      .animate({width: 800}, 500)
      .animate({height: 500}, 200)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
      loadAboutText();
      isOpen = true;
    },

    animateReverse: function() {
      console.log('text1');
      if (isOpen) {
        console.log('test2');
        $("#aboutTextBox").animate({borderWidth: 1}, "slow")
        .animate({padding: 0})
        .animate({height: 20}, 200)
        .animate({width: 20}, 500)
        .animate({right: "92%"}, 500)
        .animate({top: "95%"}, 500)
        .animate({right: "99%"}, 200);
        unloadAboutText();
        isOpen = false;
      }
    }
};
})();
