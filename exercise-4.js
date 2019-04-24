//M Romi Ario - Exercise 4
var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]

//Function dengan nama dataHandling2
//fungsi splice untuk memodifikasi variabel

function dataHandling2(array, gender, education){
    return array.splice(4,1,gender,education)
}

dataHandling2(input,"Pria","SMA Internasional Metro")
console.log(input)

/*Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), 
ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.*/
var tanggal = input[3].split("/") //split tanggal dd-mm-yyyy
var tanggalJoin = tanggal.join("-") //join tanggal dengan '-'

//switch bulan ke nama bulan
switch (tanggal[1]){
        
    case '01' :
        console.log('Januari')
        break   
    case '02' :
        console.log('Februari')
        break
    case '03' :
        console.log('Maret')
        break
    case '04' :
        console.log('April')
        break
    case '05' :
        console.log('Mei')
        break
    case '06' :
        console.log('Juni')
        break   
    case '07' :
        console.log('Juli')
        break   
    case '08' :
        console.log('Agustus')
        break   
    case '09' :
        console.log('September')
        break   
    case '10' :
        console.log('Oktober')
        break   
    case '11' :
        console.log('November')
        break   
    case '12' :
        console.log('Desember')
        break   
}

/*Pada array hasil split dari tanggal/bulan/tahun, 
lakukan sorting secara descending dan console.log array yang sudah di-sort.*/
tanggal.sort(function(a, b){return b-a}) //sorting descending
console.log(tanggal) //tanggal descending
console.log(tanggalJoin)//log tanggal join -

//slice nama
input[1].slice(0,15)
console.log(input[1])



