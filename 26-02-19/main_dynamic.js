var flag = false;

var user_data = [{ 'firstname': 'ajay', 'lastname': 'bhatt', 'email': 'ajay@gmail.com', 'id': '12334', 'phonenumber': '9876543210', 'designation': 'engineer', 'dob': '1-04-1992' },
{ 'firstname': 'pranjul', 'lastname': 'sbot', 'email': 'pran@gmail.com', 'id': '312334', 'phonenumber': '6444543210', 'designation': 'sengineer', 'dob': '2-05-1998' },
{ 'firstname': 'abhishek', 'lastname': 'baki', 'email': 'abhi@gmail.com', 'id': '212334', 'phonenumber': '7336543210', 'designation': 'eengineer', 'dob': '3-09-1997' },
{ 'firstname': 'rohit', 'lastname': 'yoi', 'email': 'rohit@gmail.com', 'id': '62334', 'phonenumber': '876543210', 'designation': 'tengineer', 'dob': '11-07-1995' },
{ 'firstname': 'mayank', 'lastname': 'shik', 'email': 'mayank@gmail.com', 'id': '712334', 'phonenumber': '2876543210', 'designation': 'bengineer', 'dob': '14-03-1996' }];

/**
// insert of the data
function insert(){
    
    // grabing the values into variable
    var name = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var id = document.getElementById("id").value;
    var p_num = document.getElementById("pno").value;
    var desi = document.getElementById("desi").value;
    var dob = document.getElementById("dob").value;

    // here inserting the new data into the array

}
 

// arrow function addelment which will call on push button
var table_print = () =>{

    //
    var tablerow = document.getElementById('tabledata');

    // all elements declared here
    var name = document.createElement('td');
    var lname = document.createElement('td');
    var email = document.createElement('td');
    var id = document.createElement('td');
    var phonenumber = document.createElement('td');
    var designation = document.createElement('td');
    var dob = document.createElement('td');

    // logic here

    document.create

}
*/

// sort function
function sort(el) {
    if (flag == false) {
        // assending order

        /** var newarr = user_data.Map(function(els,i){
             var value = els[key];
 
         });
  */
        // SORT BY FIRSTNAME
        if (el == 'firstname') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].firstname;
            }
            var a = arr.sort();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].firstname) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].firstname) {
                            user_data[i] = user_data[j];
                            user_data[j] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY LASTNAME
        if (el == 'lastname') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].lastname;
            }
            var a = arr.sort();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].lastname) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].lastname) {
                            user_data[i] = user_data[j];
                            user_data[j] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY EMAIL
        if (el == 'email') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].email;
            }
            var a = arr.sort();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].email) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].email) {
                            user_data[i] = user_data[j];
                            user_data[j] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY ID
        if (el == 'id') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].id;
            }
            var a = arr.sort();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].id) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].id) {
                            user_data[i] = user_data[j];
                            user_data[j] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY PHONENUM
        if (el == 'phonenumber') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].phonenumber;
            }
            var a = arr.sort();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].phonenumber) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].phonenumber) {
                            user_data[i] = user_data[j];
                            user_data[j] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }


        // SORT BY DES
        if (el == 'designation') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].designation;
            }
            var a = arr.sort();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].designation) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].designation) {
                            user_data[i] = user_data[j];
                            user_data[j] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY DOB
        if (el == 'dob') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].dob
            }
            var a = arr.sort();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].dob) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].dob) {
                            user_data[i] = user_data[j];
                            user_data[j] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }


        flag = true;

        tablepr(user_data);
    } else {
        // decending order

        if (el == 'firstname') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].firstname;
            }
            var a = arr.reverse();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].firstname) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].firstname) {
                            user_data[j] = user_data[i];
                            user_data[i] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY LASTNAME
        if (el == 'lastname') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].lastname;
            }
            var a = arr.rev();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].lastname) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].lastname) {
                            user_data[j] = user_data[i];
                            user_data[i] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY EMAIL
        if (el == 'email') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].email;
            }
            var a = arr.reverse();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].email) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].email) {
                            user_data[j] = user_data[i];
                            user_data[i] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY ID
        if (el == 'id') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].id;
            }
            var a = arr.reverse();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].id) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].id) {
                            user_data[j] = user_data[i];
                            user_data[i] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY PHONENUM
        if (el == 'phonenumber') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].phonenumber;
            }
            var a = arr.reverse();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].phonenumber) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].phonenumber) {
                            user_data[j] = user_data[i];
                            user_data[i] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }


        // SORT BY DES
        if (el == 'designation') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].designation;
            }
            var a = arr.reverse();
            console.log(a);
            var temp;
            for (var i = 0; i < user_data.length; i++) {
                if (a[i] != user_data[i].designation) {
                    temp = user_data[i];
                    for (var j = 0; j < user_data[0].length; j++) {
                        if (a[i] == user_data[j].designation) {
                            user_data[i] = user_data[j];
                            user_data[j] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // SORT BY DOB
        if (el == 'dob') {
            var arr = [];
            for (var i = 0; i < user_data.length; i++) {
                arr[i] = user_data[i].dob
            }
            var a = arr.reverse();
            console.log(a);
            var temp;
            for (var i = 0; i < a.length; i++) {
                if (a[i] != user_data[i].dob) {
                    temp = user_data[i];
                    for (var j = 0; j < a.length; j++) {
                        if (a[i] == user_data[j].dob) {
                            user_data[j] = user_data[i];
                            user_data[i] = temp;
                        }
                    }
                }
            } console.log(user_data);

        }

        // code ends here
        flag = false;
        tablepr(user_data);
    }
}


/**
 *     let btn = document.createElement('button');
    let btn_value = document.createTextNode('hello');
    btn.append(btn_value);
    document.body.appendChild(btn);

    // form submission code
    document.getElementById("form_id").submit();
 */

function tablepr(sorted_arr) {
    for (var i = 0; i < sorted_arr; i++) {

        // creating row element
        var name = document.createElement('td');
        var lname = document.createElement('td');
        var email = document.createElement('td');
        var id = document.createElement('td');
        var phonenumber = document.createElement('td');
        var designation = document.createElement('td');
        var dob = document.createElement('td');

        
            var th1text = document.createTextNode("First Name");
            th1.appendChild(th1text);
            document.body.appendChild(th1);
    }
}