// M Romi Ario, exercise 2, week3
//input "hello world!"

var input = "hello world!"


function balikString(input){
    var inputReserve = "";
    for(var pointer = input.length-1; pointer>=0; pointer--){
        inputReserve += input[pointer];
    }
    return inputReserve;
}

//output
console.log(balikString(input))