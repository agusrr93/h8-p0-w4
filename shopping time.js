function shoppingTime(memberId,money)
{
   var readysis={
     brand:['stacattu','Zoro','H&N','Uniklooh','Casing Handphone'],
     harga:[1500000,500000,250000,175000,50000]
   }
   var belanjaID={
      memberId:'',
      money:'',
      listPurchased:[],
      changeMoney:''
   }

   belanjaID.money=money
   belanjaID.memberId=memberId

   if(memberId==''||belanjaID.memberId==undefined&&belanjaID.money==undefined)
   {
      return 'Mohon Maaf Toko X Hanya Berlaku Untuk Member Saja'
   }
   
   if(money<50000)
   {
     return 'Mohon maaf uang tidak cukup'
   }
      //check barang terbeli
   var bisa_beli=1
   while(bisa_beli==1)
   {
      bisa_beli=0
      for(var i=0;i<readysis.brand.length;i++)
      {
        if(money>=readysis.harga[i])
        {
            belanjaID.listPurchased.push(readysis.brand[i])
            money=money-readysis.harga[i]
            bisa_beli=1
            break
        }
      }
   }
   belanjaID.changeMoney=money
   return belanjaID
}

console.log(shoppingTime('',247500))
console.log(shoppingTime('234JdhweRxa53',247500))
console.log(shoppingTime('234JdhweRxa53',47500))
console.log(shoppingTime())