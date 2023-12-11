var numberOfButtons = document.querySelectorAll(".key1").length;

for (var i = 0; i < numberOfButtons; i++) {

  document.querySelectorAll(".key1")[i].addEventListener("click", function(){

    var buttonInnerHTML=this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress",function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "a":
      var piano1 = new Audio('sounds/piano1.mp3');
      piano1.play();
      break;

    case "s":
      var piano2 = new Audio('sounds/piano2.mp3');
      piano2.play();
      break;

    case "d":
      var piano3 = new Audio('sounds/piano3.mp3');
      piano3.play();
      break;

    case "f":
      var piano4 = new Audio('sounds/piano4.mp3');
      piano4.play();
      break;

    case "g":
      var piano5 = new Audio('sounds/piano5.mp3');
      piano5.play();
      break;

    case "h":
      var piano6 = new Audio('sounds/piano6.mp3');
      piano6.play();
      break;

    case "j":
      var piano7 = new Audio('sounds/piano7.mp3');
      piano7.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); 

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}