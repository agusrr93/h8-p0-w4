function changeVocal(str)
{
    var abjad='abcdefghijklmnopqrstuvwxyz'
    
    var k=abjad.split('')
    
    var h=''
    var s=0
    for(var j=0;j<str.length;j++)
    {
      var q=str[j].toLowerCase()
      for(var i=0;i<k.length;i++)
      {
          if(q==k[i]&&(q=='a'||q=='i'||q=='u'||q=='e'||q=='o')) 
          {   
              if(str[j].toUpperCase()==str[j])
              {
                  h=h+k[i+1].toUpperCase()
              }
              else
              {
                  h=h+k[i+1]
              }   
              s=1
          }   
      }
      if(s==0)
      {
        h=h+str[j]
      }
      s=0

    }
  return h  
}

function reverseWord(str)
{
    var k=str.split('')
    k=k.reverse()
    return k.join('')
}

function setLowerUpperCase(str)
{
    var g=str.split('')

    for(var i=0;i<g.length;i++)
    {
        if(g[i].toUpperCase()==g[i])
        {
            g[i]=g[i].toLowerCase()
        }
        else if(g[i].toUpperCase()!=g[i])
        {
            g[i]=g[i].toUpperCase()
        }
    }

    var hasil=g.join('')

    return hasil
}

function removeSpace(str)
{
    return str.split(' ').join('')  
}

function passwordGenerator(name)
{
  if(name.length>=5)
  {
    var h=changeVocal(name)
    var d=reverseWord(h)
    var t=setLowerUpperCase(d)
    var e=removeSpace(t)

    return e
  } 
  else{
    return 'minimal karakter yang diinputkan adalah 5 karakter'
  }
    
}

console.log(passwordGenerator('Sergei Dragunov'))
console.log(passwordGenerator('Dimitri Wahyudiputra'))
console.log(passwordGenerator('Alexei'))
console.log(passwordGenerator('Alex'))

