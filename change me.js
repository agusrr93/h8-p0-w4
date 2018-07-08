function changeMe(arr)
{
   var person={
     firstName:"John",
     lastName:"Doe",
     gender:"Male",
     age:50
   }

   person.firstName=arr[0]
   person.lastName=arr[1]
   person.gender=arr[2]
   person.age=2018-arr[3]
  
   if(arr[3]==undefined||arr[3]>2018)
   {
     person.age="Invalid Birth Year"
   }

   console.log(person)
}

changeMe(['Christ','Evans','Male',1982])
changeMe(['Robert','Downey','Male'])
changeMe(['Christ','Evans','Male',2019])