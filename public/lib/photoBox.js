var PhotoBox = (function () {

  var isOpen = true;
  var div = $('#photoFrame');

  return {

    status: function() {
      return isOpen;
    },

    element: function() {
      return div;
    },

    animateForward: function() {
      $("#photoFrame").css('z-index', 1);
      $("#photoFrame, #photoDiv").animate({top:"30%"}, 1000)
      .animate({left:"40%"}, 1000)
      .animate({width:220, height:220}, 500)
      .animate({padding: 0})
      .animate({borderWidth: 5}, "slow");
      isOpen = true;
    },

    animateReverse: function() {
      if (isOpen) {
        $("#photoFrame, #photoDiv").animate({borderWidth: 1}, "slow")
        .animate({padding: 0})
        .animate({height: 20, width:20}, 500)
        .animate({left: "1%"}, 1000)
        .animate({top: "83%"}, 1000);
        $("#photoFrame").css('z-index', -1);
        isOpen = false;
      }
    }
};
})();
