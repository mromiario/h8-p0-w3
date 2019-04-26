function targetTerdekat(arr) {
    var i = 0;
    var countMin = 10000;
    var count = 10000;
    var countTemp;

    while(i<arr.length){
        if(arr[i] == 'o'){
            countTemp = 0;
            while(arr[i] != 'x' && i<arr.length){
                countTemp += 1
                i++;
            }
            if(arr[i] == 'x'){
                count = countTemp;
            } 
        } else{
            i++;
        }
        if(countMin>count){
            countMin = count;
        } 
    }
    var j = arr.length;
    var countReseve = 10000;
    var countMinR = 10000 ;

    while(j>=0){
        if(arr[j] == 'o'){
            countTemp = 0;
            while(arr[j] != 'x' && j>=0){
                countTemp += 1
                j--;
            }
            if(arr[j] == 'x'){
                countReseve = countTemp;
            } 
        } else{
            j--;
        }
        if(countMinR>countReseve){
            countMinR = countReseve;
        } 
    }

    if (countMin<countMinR){
        return countMin;
    } else if(countMin == 10000 && countMinR == 10000){
        return 0;

    } 
    else{
        return countMinR;
    }


}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2