function kaliTerusRekursif(angka)
{
   var kali=1
   while(angka>0)
   {
     kali=kali*(angka%10)  
     angka=Math.floor(angka/10)  
   }
   
   if(kali>9)
   {
      kali=kaliTerusRekursif(kali)
   }

   return kali
}



console.log(kaliTerusRekursif(66))
console.log(kaliTerusRekursif(3))
console.log(kaliTerusRekursif(24))
console.log(kaliTerusRekursif(654))
console.log(kaliTerusRekursif(1231))

