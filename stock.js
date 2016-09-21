"use strict";
var arr = [45, 24, 35, 31, 40, 38, 11];

function calcProf(array){
  let profit = -1;

  for(var i = 0; i < array.length; i++){

    array.forEach(function(curr) {

      if(curr > array[i] && curr - array[i] > profit){
        profit = curr - array[i];
      }

    })
    array[i] = 0;
  }
  return profit;
}

console.log(calcProf(arr));