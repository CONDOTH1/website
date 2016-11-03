var AboutBox = (function () {

  function loadAboutText(){
    console.log("Test");
    $("#aboutTextBox").load("./lib/about.html");
  }

  return {

    animateForward: function() {
      $("#aboutTextBox").animate({top: "20%"}, 1000)
      .animate({right: "0%"}, 1000)
      .animate({width: 800}, 500)
      .animate({height: 500}, 200)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
      loadAboutText();
    },

    animateReverse: function() {
      $("#aboutTextBox").animate({borderWidth: 1}, "slow")
      .animate({padding: 0})
      .animate({height: 20}, 200)
      .animate({width: 20}, 500)
      .animate({right: "99%"}, 1000)
      .animate({top: "91%"}, 1000);
    }
};
})();
