function sorting(arrNumber)
{
    var k=arrNumber.sort()
    return k.reverse()

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
         console.log('angka yang paling besar adalah '+max+' kemunculan sebanyak '+count+' kali')
    }
    else{
      console.log('')
    }
   
    return count
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
console.log(mostFrequentLargestNumbers([]))
