var PhotoBox = (function () {

  function loadContactText(){
  }

  return {

    animateForward: function() {
      $("#photoFrame").animate({borderWidth: 5}, "slow")
      // .animate({left: "39%"}, 100)
      // .animate({left: "41%"}, 100)
      // .animate({left: "39%"}, 100)
      // .animate({left: "41%"}, 100)
      .animate({height: 220, width: 220}, 1000);
    },

    animateReverse: function() {
      $("#photoFrame, #photoDiv").animate({borderWidth: 1}, "slow")
      .animate({padding: 0})
      .animate({height: 20}, 200)
      .animate({width: 20}, 500)
      .animate({left: "1%"}, 1000)
      .animate({top: "87%"}, 1000);
      $("#photoFrame").css('z-index', -1);
    }
};
})();
