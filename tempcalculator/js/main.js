var a;
var b;
var c;
var x;

var tempFormulaCel = {
  celKel: function(c) {
    x = (c+273.15);
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
  }
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

function mathFormula(a,b) {

}
