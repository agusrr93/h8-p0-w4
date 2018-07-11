function kaliTerusRekursif(angka)
{
    if(angka.toString().length===1)
    {
        return angka
    }
    else{
      var a=Math.floor(angka/10)
      var b=angka%10

      var hasil=kaliTerusRekursif(a)

      return kaliTerusRekursif(b*hasil)
    }
}



console.log(kaliTerusRekursif(66))//8
console.log(kaliTerusRekursif(3))//3
console.log(kaliTerusRekursif(24))//8
console.log(kaliTerusRekursif(654))//0
console.log(kaliTerusRekursif(1231))//6

