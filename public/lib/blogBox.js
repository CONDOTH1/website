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
      .animate({top: "20%"}, 500)
      .animate({right: "0%"}, 500)
      .animate({width: 200}, 500)
      .animate({height: 100}, 500)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
      loadContactText();
      isOpen = true;
    },

    animateReverse: function() {
      if (isOpen) {
        $("#blogTextBox").animate({borderWidth: 1}, "slow")
        .animate({padding: 0})
        .animate({height: 20}, 500)
        .animate({width: 20}, 500)
        .animate({right: "92%"}, 500)
        .animate({top: "87%"}, 500)
        .animate({right: "99%"}, 200);
        isOpen = false;
      }
    }
};
})();
