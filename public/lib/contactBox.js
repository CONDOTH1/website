var ContactBox = (function () {

  ABOUTBOX = 800;

  return {

    animateForward: function() {
      $("#contactTextBox").animate({right: "95%"}, 1000)
      .animate({top: "15%"}, 2000)
      .animate({right: "0%"}, 2000)
      .animate({width: 400}, 1000)
      .animate({height: 200}, 400)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
    },

    animateReverse: function() {
      $("#contactTextBox").animate({borderWidth: 1}, "slow")
      .animate({padding: 0})
      .animate({height: 20}, 400)
      .animate({width: 20}, 1000)
      .animate({right: "95%"}, 1000)
      .animate({top: "95%"}, 2000)
      .animate({right: "99%"}, 1000);
    }
};
})();
