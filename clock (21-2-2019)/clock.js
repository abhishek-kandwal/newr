// here all the variables has been declared
var  day = ['null','monday','tuseday','wednesday','Thrusday','friday','saturday','sunday'];
var time = new Date();
var hh =  time.getHours();
var mm = time.getMinutes();
var sec = time.getSeconds();
var i = time.getDay();
var date = time.getDate();
var year = time.getFullYear();
var month = time.getMonth();
var dm;

// here to check is its pm and am.

if(hh >= 13){
    dm = 'pm';
}else{
    dm = 'am'
}


// here the main logic here .

function clock(){

    // this will clear the console in every 1sec.
    console.clear();

    // this will call the updateclock() function.
    updateclock()

    // this will print the time
    console.log( day[i] + ' ' +  date + '-' + month + '-' + year  + ' ' + hh + ':' + mm + ':' + sec + ' ' + dm);
    
    // this updateclock function will update the time everytime.
    function updateclock(){
        if(sec >= 60){
            mm++;
            sec = 0;
        }
        if(mm>=60){
            hh++;
            mm = 0;
        }
        if(hh>=12){
           dm = 'pm';
        }
        if(hh>=24){
          dm = 'am';
          hh=01;
            i++;
            if(i>7){
           i=1;
            }
    
        }
        sec++;
    }
    
}


// call back function
setInterval(clock,1000);