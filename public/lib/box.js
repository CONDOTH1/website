var Box = (function () {

  function loadAboutText(element, textBox){
    element.contents().fadeIn(3000);
  }

  function unloadAboutText(element){
    $("#quote").fadeOut("slow");
    element.contents().fadeOut("slow");
  }

  return {

    status: function(box) {
      return openBoxes[box];
    },

    animateForward: function(element, textBox, positions) {
      element.animate({right: "92%"}, 200)
      .animate({top: "20%"}, 500)
      .animate({right: "0%"}, 500)
      .animate({width: positions.width}, 500)
      .animate({height: positions.height}, 200)
      .animate({padding: positions.padding})
      .animate({borderWidth: 5}, "slow");
      loadAboutText(element, textBox);
    },

    animateReverse: function(element, position) {
        element.animate({borderWidth: 1}, "slow")
        .animate({padding: 0})
        .animate({height: 20}, 200)
        .animate({width: 20}, 500)
        .animate({right: "92%"}, 500)
        .animate({top: position}, 500)
        .animate({right: "99%"}, 200);
        unloadAboutText(element);
    }
};
})();
