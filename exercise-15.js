function groupAnimals(animals) {
    
    arrLength = animals.length;
    var newAnimals = [];
    var alphabet = [];//array menampung huruf depan yang sudah dikelompokkan, sehingga value tdk duplikat
    var i=0;
    while(i<arrLength){ //looping seluruh elemen
        var newArray = [] //array sementara mengelompokkan yang huruf depannya sama
        var j = 0;
        while(j<arrLength){
            if(animals[i][0] == animals[j][0]){
                newArray.push(animals[j]);   
            }
            j++;
        }
        if(alphabet.indexOf(animals[i][0])==-1){ //jika huruf tersebut belum diloop sebelumnya
            newAnimals.push(newArray); 
        }
        alphabet.push(animals[i][0])
        i++;
    }
    newAnimals.sort();
    return newAnimals ;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]

