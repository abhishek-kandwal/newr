// define a arrow function here that will check the type 
var typecheck = (value) =>{
    if(typeof value === 'string'){
        console.log('type >: string ' + value );  
    }else if(typeof value === 'number' && isFinite(value)){
        console.log('type >: number ' + value );
    }else if(typeof value === 'boolean'){
        console.log('type >: boolean ' + value);
    }
    else if(value === null){
        console.log('type >: Null ' + value );
    }else if(value && typeof value === 'object' && value.constructor === Object){
        console.log('Type >: Object ');
        value.map((y)=>{
            console.log(y);
        });
    }else if(typeof(value)==='object'&& typeof(value[0])!=='object' ){
        console.log('type >: array' );
        value.map((x)=>{
            console.log(x);
        });

    }else if(typeof(value)==='object'&& typeof(value[0])==='object'){
        console.log("type >: Array of object" ); 
        value.map((x,i)=>{
        console.log(x);
    });   
    }else if(isNaN(value) ){
        console.log('type >: NaN');
    }else if(typeof type === 'undefined'){ 
        console.log('Type >: Undefined' );
    }
}

// variable are declared here
var array = [1,2,3];
var array_of_obj = [{'a':1},{'b':2},{'c':3}]; 
var a = null;
var object = {'a': 1};

// calling all the functions here
typecheck('hello world');                       // passing a sting 
typecheck(23);                            // passing a number
typecheck(true);                         // boolean check
typecheck(a);                           // passing a null value
typecheck(array);                      // passing a array
typecheck(array_of_obj);              // passing a array of object
typecheck(not_define_var);           // passing a variable which is not define yet

var not_define_var = 8 ;            // this is defined after the function 

typecheck(object);                 // passing a object
typecheck(Math.max(array));       // passing a array in math function , will print a NaN