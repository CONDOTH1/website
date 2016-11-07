$(document).ready(function(){

  var boxes = {contact: ContactBox, about: AboutBox, photo: PhotoBox, blog: BlogBox};

  $('#home').click(function(){
    openBox(boxes.photo);
  });

  $('#about').click(function(){
    openBox(boxes.about);
  });

  $('#contact').click(function(){
    openBox(boxes.contact);
  });

  $('#news').click(function(){
    openBox(boxes.blog);
    });

  function openBox(box) {
    if (box.status() === false) {
      var element = closeBoxes();
      console.log(element);
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
