var a, b, c, d;
var $StartYear = document.querySelector(".startyear");
var $EndYear = document.querySelector(".endyear");
var $Equal = document.querySelector(".calculate");
var $Result = document.querySelector(".equal");

function biggerYear () {
  if ( parseFloat($StartYear.value, 10) > parseFloat($EndYear.value, 10)){
    b = parseFloat($StartYear.value, 10);
    a = parseFloat($EndYear.value, 10)
  } else {
    b = parseFloat($EndYear.value, 10);
    a = parseFloat($StartYear.value, 10);
  }
}

function leapYears () {
  var e = b-a;
    c = 0;
  for (var i = 0; i <= e; i++) {
        console.log(c)
    if ((a+i) % 4 === 0 && (a+i) % 100 !== 0){
      c++
    } else if ((a+i) % 400 === 0) {
      c++
    } else {
      c = c;
    }
  }
}

function calculateYears () {
  d = (((b-a)*365)+c)*86400;
}

$Equal.addEventListener('click', function(){
    calculateYears (leapYears (biggerYear ()))
    $Result.innerText = d;
})
