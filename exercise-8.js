function pasanganTerbesar(num) {
   var strNum = ''+num;
   var maxNumber = 0;
   for(var i=0; i<strNum.length; i++){
       if(i+1<strNum.length){
           var currentNumber = Number(strNum[i]+''+strNum[i+1]);
           if (maxNumber<currentNumber){
               maxNumber = currentNumber;
           }
       }
   }
   return maxNumber;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99