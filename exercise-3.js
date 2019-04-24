//M Romi Ario - Exercise 3 - Week 3
var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(arrayN){
    for (var count=0; count<arrayN.length; count++){
        console.log('Nomor ID: '+arrayN[count][0]);
        console.log('Nama Lengkap: '+arrayN[count][1]);
        console.log('TTL: '+arrayN[count][2]);
        console.log('Hobi: '+arrayN[count][3]);
        console.log();
    }
}

dataHandling(input);