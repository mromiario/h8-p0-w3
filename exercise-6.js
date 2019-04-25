function angkaPalindrome(num) {
    var StringNum;
    var reserveNum;

    if (num<=10){
        num++
    } 
    else{
        num++;
        StringNum = ''+num;
        reserveNum = '';
        for(var i = StringNum.length-1; i>=0; i--){
            reserveNum += StringNum[i];   
        }

        while(StringNum !== reserveNum){
            num++;
            StringNum = ''+num;
            reserveNum = '';
            for(var j = StringNum.length-1; j>=0; j--){
                reserveNum += StringNum[j];   
            }

        }

    }

    return num;}
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001