var AboutBox = (function () {

  function loadAboutText(){
    $("#aboutTextBox").load("about.html");
  }

  return {

    animateForward: function() {
      $("#aboutTextBox").animate({top: "15%"}, 2000)
      .animate({right: "0%"}, 2000)
      .animate({width: 800}, 1000)
      .animate({height: 800}, 400)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
      loadAboutText();
    },

    animateReverse: function() {
      $("#aboutTextBox").animate({borderWidth: 1}, "slow")
      .animate({padding: 0})
      .animate({height: 20}, 400)
      .animate({width: 20}, 1000)
      .animate({right: "99%"}, 2000)
      .animate({top: "92%"}, 2000);
    }
};
})();
