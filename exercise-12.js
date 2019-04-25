function tentukanDeretGeometri(arr) {
    var beda= arr[1]/arr[0];
    var bedaPrev = beda;
    var i = 1;
    while(bedaPrev == beda && i<arr.length){
        if(i!=arr.length-1){
            bedaPrev = beda;
            beda= arr[i+1]/arr[i];
        }
        i++;
    }
    if(bedaPrev != beda){
        return false;
    } else{
        return true;
    }
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false