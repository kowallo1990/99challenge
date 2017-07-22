var coin
var hT
var $output = document.querySelector("output");

function toss () {
  var score = Math.random()
  document.getElementById("tailcoin").style.display = "none";
  document.getElementById("headcoin").style.display = "none";
  document.getElementById("empty").style.display = "block";
  if (score> 0.5) {
    hT=1;
    setTimeout(function(){
      document.getElementById("empty").style.display = "none";
      document.getElementById("tailcoin").style.display = "block"; }, 500);

  } else {
    hT=0;
    setTimeout(function(){
      document.getElementById("empty").style.display = "none";
      document.getElementById("headcoin").style.display = "block"; }, 500);
  }
}

function score (){
  if (hT===coin){
    $output.innerText = "Wygrałeś!";
  } else {
    $output.innerText = "Próbuj jeszcze raz!";
  };
}

document.getElementById("head").addEventListener('click', function(rozgrywka) {
  $output.innerText = "";
  coin=1;
  toss ()
  setTimeout(function(){score ();}, 600);
});

document.getElementById("tail").addEventListener('click', function(rozgrywka) {
  $output.innerText = "";
  coin=0;
  toss ()
  setTimeout(function(){score ();}, 600);
});
