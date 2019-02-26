// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency<=0){
        return {};
    }
    if (currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    var result = {};
    config.forEach(item=>{
       var q= parseInt(currency/item.value);
       if (q>0){
           result[item.label] = q;
           currency = currency - item.value*q;
       }
    });
    return result;
}

config = [
    {label:"H", value: 50},
    {label:"Q", value: 25},
    {label:"D", value: 10},
    {label:"N", value: 5},
    {label:"P", value: 1}
]
