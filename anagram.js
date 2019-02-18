var strarray1=[100];
var strarray2=[100];
var str1='dacbe';
var str2="dcabe";
var check1='';
var check2='';

for(var i = 0; i < str1.length; i++)
{   
    strarray1[i]=str1[i];
}

for(var j = 0; j < str2.length; j++){   
    strarray2[j]=str2[j];
}

for(var k=1;k<strarray1.length;k++)
{
    for(l=0;l<strarray1.length-l;l++)
    {
        if(strarray1[l]>strarray1[l+1])
        {
            var temp=strarray1[l];
            strarray1[l]=strarray1[l+1];
            strarray1[l+1] = temp;
        }
    }
}

for(var l=0;l<strarray1.length;l++)
{
    check1 += strarray1[l]; 
}

for(var k=1;k<strarray2.length;k++)
{
    for(l=0;l<strarray2.length-l;l++)
    {
        if(strarray2[l]>strarray2[l+1])
        {
            var temp=strarray2[l];
            strarray2[l]=strarray2[l+1];
            strarray2[l+1] = temp;
        }
    }
    
}
     

for(var l=0;l<strarray2.length;l++)
{
    check2 += strarray2[l]; 
}
    
console.log(check1);
console.log(check2);

if(check1===check2)
{
    console.log("isAnagram");
}

else
{
    console.log("Not Anagram");
}
