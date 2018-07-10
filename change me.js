function changeMe(arr)
{
   if(arr.length!=0)
   {
      var person={
        firstName:[],
        lastName:[],
        gender:[],
        age:[]
      }

      for(var i=0;i<arr.length;i++)
      {
          person.firstName.push(arr[i][0])
          person.lastName.push(arr[i][1])
          person.gender.push(arr[i][2])
          person.age.push(2018-arr[i][3])

          if(arr[i][3]==undefined||arr[i][3]>2018)
          {
            person.age.pop()
            person.age.push("Invalid Birth Year")
          }
      }

      //pisahkan array dan tampilkan
        for(var i=0;i<arr.length;i++)
        {
          var orang={}
          orang.firstName=person.firstName[i]
          orang.lastName=person.lastName[i]
          orang.gender=person.gender[i]
          orang.age=person.age[i]
          console.log((i+1)+'. '+orang.firstName+' '+orang.lastName)
          console.log(orang)
          
      }
   }
   else
   {
     console.log("''")
   }
  //  console.log(1+'.'+person.firstName+' '+person.lastName)
  //  console.log(person) 
}

changeMe([['Christ','Evans','Male',1982],['Robert','Downey','Male']])
console.log('')
changeMe([['Robert','Downey','Male']])
console.log('')
changeMe([['Christ','Evans','Male',2019]])
changeMe([])
