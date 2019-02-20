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

function calculate (input=E,amount=100){
    for(var i = 0; i<data.length; i++){
        if(data[i].type == input){
            var percentage;
            var deduct;
            var net_percentage;
            net_percentage = ((amount / 100 ) * data[i].percentage);
            deduct = amount - data[i].percentage;

            console.log( 'type :' + data[i].type + '\n' + 'amount :' + amount + '\n' + 'percentage :' + data[i].percentage + '\n' + 'deducted :' + deduct + '\n' + 'percentage :' + net_percentage);
        }
    }
}

var result = calculate('A',98);

