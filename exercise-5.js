function palindrome(kata) {
    var reserveKata = '';
    for(var i = kata.length-1; i>=0; i--){
        reserveKata += kata[i]   
    }
    if (kata === reserveKata){
        return true;
    } else{
        return false;
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false