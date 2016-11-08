$(document).ready(function(){

  var boxes = {contact: ContactBox, about: AboutBox, photo: PhotoBox, trivia: TriviaBox};

  $('#home').click(function(){
    openBox(boxes.photo);
  });

  $('#about').click(function(){
    openBox(boxes.about);
  });

  $('#contact').click(function(){
    openBox(boxes.contact);
  });

  $('#trivia').click(function(){
    openBox(boxes.trivia);
    });
  //
  $(document).delegate('#sports', 'click', function(){
    boxes.trivia.animateTall($('#triviaSport'));
    boxes.trivia.setSportsOpen();
  });

  $(document).delegate('#movies', 'click', function(){
    boxes.trivia.animateTall($('#triviaMovies'));
    boxes.trivia.setMoviesOpen();
  });

  function openBox(box) {
    if (box.status() === false) {
      var element = closeBoxes();
      $.when(element).then(function() {
        box.animateForward();
      });
    }
  }

  function closeBoxes() {
    for (var key in boxes) {
      if (boxes[key].status() === true) {
        boxes[key].animateReverse();
        return boxes[key].element();
      }
    }
  }

});
