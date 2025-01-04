var i = 0;
var txt = 'Welcome to DNA MOTORS';
var speed = 50;

window.onload = function() {
	typeWriter();
};

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("dnamotortext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}