let flag = false;
var array_of_obj = [];

// this is to create the the dynamic form
var inputbar = () => {
    if (flag == false) {
        var inputtag_date = document.createElement('input');
        var inputtag_des = document.createElement('input');
        var btn_ok = document.createElement('button');
        var btn_no = document.createElement('button');

        inputtag_date.setAttribute('id', 'usr_date');
        inputtag_date.setAttribute('type', 'date');

        inputtag_des.setAttribute('id', 'usr_des');
        inputtag_des.setAttribute('type', 'text');

        btn_ok.setAttribute('id', 'btn_ok');
        btn_ok.setAttribute('onclick', 'add_row()');

        btn_no.setAttribute('id', 'btn_no');
        btn_no.setAttribute('onclick', 'clean()');

        var btn_add = document.createTextNode('add');
        var btn_close = document.createTextNode('close');

        btn_ok.append(btn_add);
        btn_no.append(btn_close);

        document.body.appendChild(inputtag_date);
        document.body.appendChild(inputtag_des);
        document.body.appendChild(btn_ok);
        document.body.appendChild(btn_no);

        flag = true;
    }

}


// this function to add the entry in the array
var add_row = () => {
    flag = 'false'
    // getting value here
    let usrdate = document.getElementById('usr_date').value;
    let usrdes = document.getElementById('usr_des').value;

    array_of_obj.push({ 'date': usrdate, 'des': usrdes });

    //array_of_obj.map((x)=>{
    // });
    // console.log(array_of_obj);

    // calling the function to create the table
    createtable()
}

// this function will remove the table
var clean=()=>{
    flag=false;
    let oldinput= document.getElementById('usr_date');
    let olddes= document.getElementById('usr_des');
    let oldok= document.getElementById('btn_ok');
    let oldno= document.getElementById('btn_no');
    
    oldinput.remove();
    olddes.remove();
    oldok.remove();
    oldno.remove();
    
}


// this function will create the tables
var createtable = () => {
    let oldtable = document.getElementById('table');
    if (!!oldtable) {
        oldtable.remove();
    }
    var table = document.createElement('table');
    table.setAttribute('id', 'table');

    // here after
    var th1 = document.createElement('th');
    var th2 = document.createElement('th');
    
    // 1
    var th1_heading = document.createTextNode('date');
    var th2_heading = document.createTextNode('description');
    


    th1.append(th1_heading);
    th2.append(th2_heading);
    table.appendChild(th1);
    table.appendChild(th2);

    // 2
    for (var i = 0; i < array_of_obj.length; i++) {

        var data = array_of_obj[i];
        
 // button here
        var btn_del = document.createElement('button');
        var btn_val = document.createTextNode('delete');
        btn_del.append(btn_val);
        btn_del.setAttribute('id', i);
        btn_del.setAttribute('onclick', 'deleted()');

 // button ends here

        var tr = document.createElement('tr');
        var date = document.createElement("td");
        var desc = document.createElement("td");

        //var getdate = document.getElementById("usr_date").value; 
        //date.append(getdate);
        // tr.appendChild(date);

            
            date.append(data['date']);
            desc.append(data['des']);
            tr.appendChild(date);
            tr.appendChild(desc);
            tr.appendChild(btn_del);
            table.appendChild(tr);
            
        
        
    }
    document.body.appendChild(table);
// end here
} 

// this function will delete the row
var deleted = ()=>{
    for(var i = 0 ; i<array_of_obj.length;i++){
        
    }
}
