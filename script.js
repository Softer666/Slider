var number = Math.floor(Math.random() * 5) + 1;

var timer1 = 0;
var timer2 = 0;

function select(nrphoto) {
  clearTimeout(timer1);
  clearTimeout(timer2);
  number = nrphoto - 1;
  hide();
  setTimeout("changephoto()", 500);
}

function hide() {
  $("#slider").fadeOut(500);
}

function changephoto() {
  number++;
  if (number > 5) number = 1;

  var file = '<img src="photo/Photo' + number + '.jpg"/>';

  document.getElementById("slider").innerHTML = file;
  $("#slider").fadeIn(500);

  timer1 = setTimeout("changephoto()", 5000);
  timer2 = setTimeout("hide()", 4500);
}
