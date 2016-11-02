$(document).ready(function(){

  var openBoxes = {contact: false, about: false};

  $('#home').click(function(){
    closeBoxes();
  });

  $('#about').click(function(){
    if (openBoxes.about === false) {
      var element = closeBoxes();
      $.when(element).then(function() {
        AboutBox.animateForward();
      });
      openBoxes.about = true;
    }
  });

  $('#contact').click(function(){
    if (openBoxes.contact === false) {
      var element = closeBoxes();
      $.when(element).then(function() {
        ContactBox.animateForward();
      });
      openBoxes.contact = true;
    }
  });

  function closeBoxes() {
    for (var key in openBoxes) {
      if (openBoxes[key] === true) {
        if (key == "contact") {
          ContactBox.animateReverse();
          openBoxes.contact = false;
          return $('#contactTextBox');
        } else if (key === "about") {
          AboutBox.animateReverse();
          openBoxes.about = false;
          return $('#aboutTextBox');
        }
      }
    }
  }

  $('#news').click(function(){
    console.log(ContactBox.open(width));
  });


});
