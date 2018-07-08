function countProfit(shoppers){
  let listBarang=[['Sepatu Stacattu',150000,10],['Baju Zoro',50000,2],['Sweater Uniklooh',175000,1]]

  var untungteros=[{
    product:'Sepatu Stacattu',
    name:[],
    leftOver:10,
    totalProfit:0
  },{
    product:'Baju Zoro',
    name:[],
    leftOver:2,
    totalProfit:0
  },{
    product:'Sweater Uniklooh',
    name:[],
    leftOver:1,
    totalProfit:0
  }
  ]
  
  
  for(var i=0;i<shoppers.length;i++)
  {
     if(shoppers[i].product=='Sepatu Stacattu')
     {
         if(shoppers[i].amount<=listBarang[0][2])
         {
           listBarang[0][2]=listBarang[0][2]-shoppers[i].amount
           untungteros[0].leftOver=listBarang[0][2]
           untungteros[0].name.push(shoppers[i].name)
           untungteros[0].totalProfit=untungteros[0].totalProfit+(shoppers[i].amount*listBarang[0][1])
         }
     }
     if(shoppers[i].product=='Baju Zoro')
     {
         if(shoppers[i].amount<=listBarang[1][2])
         {
           listBarang[1][2]=listBarang[1][2]-shoppers[i].amount
           untungteros[1].leftOver=listBarang[1][2]
           untungteros[1].name.push(shoppers[i].name)
           untungteros[1].totalProfit=untungteros[1].totalProfit+(shoppers[i].amount*listBarang[1][1])
         }
     }
     if(shoppers[i].product=='Sweater Uniklooh')
     {
         if(shoppers[i].amount<=listBarang[2][2])
         {
           listBarang[2][2]=listBarang[2][2]-shoppers[i].amount
           untungteros[2].leftOver=listBarang[2][2]
           untungteros[2].name.push(shoppers[i].name)
           untungteros[2].totalProfit=untungteros[2].totalProfit+(shoppers[i].amount*listBarang[2][1])
         }
     }
  }
  return untungteros
}

console.log(countProfit([{name:'Windi',product:'Sepatu Stacattu',amount:2},{name:'Vanessa',product:'Sepatu Stacattu',amount:3}]))
console.log('\n\n')
console.log(countProfit([{name:'Windi',product:'Sepatu Stacattu',amount:8},{name:'Vanessa',product:'Sepatu Stacattu',amount:10},{name:'Rani',product:'Sweater Uniklooh',amount:1},{name:'Devi',product:'Baju Zoro',amount:1},{name:'Lisa',product:'Baju Zoro',amount:1}]))
console.log('\n\n')
console.log(countProfit([{name:'Windi',product:'Sepatu Naiki',amount:5}]))
