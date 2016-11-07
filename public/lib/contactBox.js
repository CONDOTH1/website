var ContactBox = (function () {

  var isOpen = false;
  var div = $('#contactTextBox');

  function loadContactText(){
    $("#contactTextBox").load("./lib/contact.html");
  }


  return {

    status: function() {
      return isOpen;
    },

    element: function() {
      return div;
    },

    animateForward: function() {
      console.log('testcontact');
      $("#contactTextBox").animate({right: "92%"}, 200)
      .animate({top: "20%"}, 500)
      .animate({right: "0%"}, 500)
      .animate({width: 400}, 500)
      .animate({height: 200}, 400)
      .animate({padding: "+=30px"})
      .animate({borderWidth: 5}, "slow");
      loadContactText();
      isOpen = true;
    },

    animateReverse: function() {
      if (isOpen) {
        console.log('testcontact');
        $("#contactTextBox").animate({borderWidth: 1}, "slow")
        .animate({padding: 0})
        .animate({height: 20}, 400)
        .animate({width: 20}, 500)
        .animate({right: "92%"}, 500)
        .animate({top: "91%"}, 500)
        .animate({right: "99%"}, 200);
        isOpen = false;
      }
    }
};
})();
