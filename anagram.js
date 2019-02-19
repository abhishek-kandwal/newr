// here is the variables.
var strar1=[10];
var strar2=[10];
var str1='hello';
var str2="olleh";
var checker1='';
var checker2='';

// here the main code begins
// for loop for converting the string in array
for(var i = 0; i < str1.length; i++)
{   
    strar1[i]=str1[i];
}

for(var j = 0; j < str2.length; j++){   
    strar2[j]=str2[j];
}

// sorting the array-1 here. 

for(var k=1;k<strar1.length;k++)
{
    for(l=0;l<strar1.length-l;l++)
    {
        if(strar1[l]>strar1[l+1])
        {
            var temp=strar1[l];
            strar1[l]=strar1[l+1];
            strar1[l+1] = temp;
        }
    }
}

// converting the array-1 into string-1
for(var l=0;l<strar1.length;l++)
{
    check1 += strar1[l]; 
}

// sorting the next array-2 here 
for(var k=1;k<strar2.length;k++)
{
    for(l=0;l<strar2.length-l;l++)
    {
        if(strar2[l]>strar2[l+1])
        {
            var temp=strar2[l];
            strar2[l]=strar2[l+1];
            strar2[l+1] = temp;
        }
    }
    
}
     
// converting the array-2 into string-2
for(var l=0;l<strar2.length;l++)
{
    checker2 += strar2[l]; 
}

// here printing the strings-1 & 2.
console.log(checker1);
console.log(checker2);

// checking is a anagram or not
if(checker1===checker2)
{
    console.log("is a Anagram");
}

else
{
    console.log("Not Anagram");
}
