function tentukanDeretAritmatika(arr) {
    var selisih= arr[1]-arr[0];
    var selisihPrev = selisih;
    var i = 1;
    while(selisihPrev == selisih && i<arr.length){
        if(i!=arr.length-1){
            var selisihPrev = selisih;
            var selisih= arr[i+1]-arr[i];
        }
        i++;
    }
    if(selisihPrev != selisih){
        return false;
    } else{
        return true;
    }

  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false