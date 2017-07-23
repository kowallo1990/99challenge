var a;
var b;
var c;
var x;

var $calinp = document.querySelector(".calculator_input");
var $result = document.querySelector(".result");

var $Cel1 = document.querySelector(".temp_option_Celcjusz_1");
var $Kel1 = document.querySelector(".temp_option_Kelvin_1");
var $Fah1 = document.querySelector(".temp_option_Fahrenheit_1");
var $Ran1 = document.querySelector(".temp_option_Rankine_1");
var $Del1 = document.querySelector(".temp_option_Delisle_1");
var $New1 = document.querySelector(".temp_option_Newton_1");
var $Rea1 = document.querySelector(".temp_option_Réaumur_1");
var $Ro1 = document.querySelector(".temp_option_Rømer_1");

var $Cel2 = document.querySelector(".temp_option_Celcjusz_2");
var $Kel2 = document.querySelector(".temp_option_Kelvin_2");
var $Fah2 = document.querySelector(".temp_option_Fahrenheit_2");
var $Ran2 = document.querySelector(".temp_option_Rankine_2");
var $Del2 = document.querySelector(".temp_option_Delisle_2");
var $New2 = document.querySelector(".temp_option_Newton_2");
var $Rea2 = document.querySelector(".temp_option_Réaumur_2");
var $Ro2 = document.querySelector(".temp_option_Rømer_2 ");


$Cel1.addEventListener('click', function () {
	a = 1
});
$Kel1.addEventListener('click', function () {
	a = 2
});
$Fah1.addEventListener('click', function () {
	a = 3
});
$Ran1.addEventListener('click', function () {
	a = 4
});
$Del1.addEventListener('click', function () {
	a = 5
});
$New1.addEventListener('click', function () {
	a = 6
});
$Rea1.addEventListener('click', function () {
	a = 7
});
$Ro1.addEventListener('click', function () {
	a = 8
});

$Cel2.addEventListener('click', function () {
	b = 1
});
$Kel2.addEventListener('click', function () {
	b = 2
});
$Fah2.addEventListener('click', function () {
	b = 3
});
$Ran2.addEventListener('click', function () {
	b = 4
});
$Del2.addEventListener('click', function () {
	b = 5
});
$New2.addEventListener('click', function () {
	b = 6
});
$Rea2.addEventListener('click', function () {
	b = 7
});
$Ro2.addEventListener('click', function () {
	b = 8
});


var tempFormulaCel = {
  celKel: function(c) {
    x = c+273.15;
  },
  celFah: function(c) {
    x = c*(9/5)-32;
  },
  celRan: function(c) {
    x = (b+273.15)*(9/5);
  },
  celDenl: function(c) {
    x = (100-c)*(3/2);
  },
  celNew: function(c) {
    x = c*(33/100);
  },
  celRea: function(c) {
    x = c*(4/5);
  },
  celRo: function(c) {
    x = (c+7.5)*(21/40);
  }
}

var tempFormulaOther = {
  kelCel: function(c) {
    x = c-273.15;
  },
  fahCel: function(c) {
    x = (5/9)*c+32;
  },
  ranCel: function(c) {
    x = (c-273.15)*5/9;
  },
  denlCel: function(c) {
    x = 100-(c*2/3);
  },
  newCel: function(c) {
    x = c*(100/33);
  },
  reaCel: function(c) {
    x = c*(5/4);
  },
  roCel: function(c) {
    x = (c-7,5)*(40/21);
  }
}

tempFormulaCel.celKel(10);
      console.log(x)

document.getElementById('calculate').addEventListener('click', function(){
  if (a===1) {
    if (b===1) {

    } else if (b===2){
      var d = parseFloat($calinp.value, 10);
      tempFormulaCel.celKel(d);
      $result.innerText = x;
    }
  }
})
