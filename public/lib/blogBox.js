var BlogBox = (function () {

  var isOpen = false;
  var div = $('#blogTextBox');

  function loadContactText(){
    $("#blogTextBox").load("./lib/blog.html");
  }

  return {

    status: function() {
      return isOpen;
    },

    element: function() {
      return div;
    },

    animateForward: function() {
      $("#blogTextBox").animate({right: "92%"}, 500)
      .animate({top: "20%"}, 1000)
      .animate({right: "0%"}, 1000)
      .animate({width: 200}, 500)
      .animate({height: 100}, 400)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
      loadContactText();
      isOpen = true;
    },

    animateReverse: function() {
      if (isOpen) {
        $("#blogTextBox").animate({borderWidth: 1}, "slow")
        .animate({padding: 0})
        .animate({height: 20}, 400)
        .animate({width: 20}, 500)
        .animate({right: "92%"}, 1000)
        .animate({top: "87%"}, 1000)
        .animate({right: "99%"}, 500);
        isOpen = false;
      }
    }
};
})();
