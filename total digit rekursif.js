function totalDigitRekursif(angka)
{
    if(angka==0)
    {
        return 0
    }
    else
    {
        return (angka%10+totalDigitRekursif(Math.floor(angka/10)))
    }
       
}

console.log(totalDigitRekursif(512))
console.log(totalDigitRekursif(1542))
console.log(totalDigitRekursif(5))
console.log(totalDigitRekursif(21))
console.log(totalDigitRekursif(1111))
