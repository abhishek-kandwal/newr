var data = [
    {
        "type": 'A',
        "percentage": 5
    },
    {
        "type": 'B',
        "percentage": 15
    },
    {
        "type": 'C',
        "percentage": 25
    },
    {
        "type": 'D',
        "percentage": 35
    },
    {
        "type": 'E',
        "percentage": 0
    }
]

function calculate (input=E,amount=0){
    for(var i = 0; i<data.length; i++){
        if(data[i].type == input){
            var percentage;
            var deduct;
            var net_percentage;
            deduct_amu = ((amount * data[i].percentage  )/ 100 );
            deduct = amount - deduct_amu;

            console.log( 'type :' + data[i].type + '\n' + 'amount :' + amount + '\n' + 'percentage :' + data[i].percentage + '\n' + 'deducted :' + deduct_amu  + '\n' + 'new_amu :' + deduct );
        }
    }
}

var result = calculate('A',1000);

