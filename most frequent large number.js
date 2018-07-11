function sorting(arrNumber)
{
    //improve with bubble sort
       

   while(sum!=0)
   { 
    for(var i=0;i<arrNumber.length-1;i++)
    {
        var temp
        if(arrNumber[i]<arrNumber[i+1])
        {
           temp=arrNumber[i]
           arrNumber[i]=arrNumber[i+1]
           arrNumber[i+1]=temp
        }
    }

    var sum=0
    for(var i=0;i<arrNumber.length;i++)
    {
        if(arrNumber[i]<arrNumber[i+1])
        {
            sum=sum+1
        }
    }
   }
  
  
  return arrNumber
}

function getTotal(arrNumber)
{
    var max=arrNumber[0]
    var count=0
    for(var i=0;i<arrNumber.length;i++)
    {
        if(max==arrNumber[i])
        {
           count=count+1
        }
    }
    
    if(count!=0)
    {
         return "'"+"angka yang paling besar adalah "+max+" kemunculan sebanyak "+count+" kali"+"'"
    }
    
    else if(arrNumber.length==0){
      return "'"+"'"
    }
}

function mostFrequentLargestNumbers(arrNumber)
{
  var listSort=sorting(arrNumber)
  var countingHighest=getTotal(listSort)
  return countingHighest
}

console.log(mostFrequentLargestNumbers([2,8,4,6,8,5,8,4]))
console.log(mostFrequentLargestNumbers([122,122,130,100,135,100,135,150]))
console.log(mostFrequentLargestNumbers([1,1,1]))
console.log(mostFrequentLargestNumbers([1,100,5]))
console.log(mostFrequentLargestNumbers([]))

