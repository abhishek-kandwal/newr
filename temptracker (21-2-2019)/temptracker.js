/**
 * Write a code with these methods:
   insert() - records a new temperature

   get_max() - returns the highest temp we've seen so far

   get_min() - returns the lowest temp we've seen so far

   get_mean() - returns the mean of all temps we've seen so far

   get_mode() - returns a mode of all temps we've seen so far


Favour speeding up the getter methods get_max(), get_min(), get_mean(), and get_mode() over speeding up the insert() method.
get_mean() should return a float, but the rest of the getter methods can return integers. Temperatures will all be inserted as integers and we can assume they will be in the range 0 ℃ to 150 ℃.
If there is more than one mode, return any of the modes.

 */

// here is the data in the array 

var tempdata = [
    {
        'tem': 24
    },
    {
        'tem': 34
    },
    {
        'tem': 44
    },
    {
        'tem': 4
    },
    {
        'tem': 74
    },
    {
        'tem': 94
    }
]

// VARIABLES
// here all the variable declared
var max = 0,min = 0,tempsum = 0;

// this function will insert the temperature in the tempdata
function insert(newtemp){
    tempdata.push({'tem': newtemp});
    console.log( 'new_temperature > ' + tempdata[tempdata.length-1].tem);
}

// MAX TEMPERATURE
// this is the function to get the max temp in our data
function get_max(){
    for(var i=0 ; i<tempdata.length;i++){
        if(tempdata[i].tem > max){
            max = tempdata[i].tem;
        }
    }
    console.log( 'max_temperature > ' + max);
}

// MINIMUM TEMPERATURE
// this function will get the minimum temp
function get_min(){  
    min = max;
    for(var i=0; i<tempdata.length;i++){
        if(min > tempdata[i].tem){
            min = tempdata[i].tem;
        }
    }
    console.log( 'min_temperature > ' + min);
}

// MEAN
// this function will get the mean temperature
function get_mean(){

    for(var i=0; i<tempdata.length;i++){
        tempsum += tempdata[i].tem;
    }
    var mean = tempsum/tempdata.length;
    console.log( 'mean_temperature > ' + mean);
}


// MODE
// this function will get the mode temperature
function get_mode(){
    var temp_data = {};
    for(var i=0; i<tempdata.length;i++){
        if(temp_data[tempdata[i].tem]===undefined){
            temp_data[tempdata[i].tem]=1;
        }else{
            temp_data[tempdata[i].tem]+=1;
        }
    }
    console.log('temperature_mode > ')
    console.log(temp_data);
}

// here to call all the functions 
insert(34)
get_max()
get_min()
get_mean()
get_mode()