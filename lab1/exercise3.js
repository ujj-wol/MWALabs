const item = {
    'name': 'Biscuits',
    'type': 'regular',
    'category': 'food',
    'price': 200
}

function applyCoupon(item) {
    //console.log(item.price);
    return function(discount) {
        item.price = item.price-(discount*item.price/100);
        //console.log(item.price);
        return item;
    }
}
console.log(applyCoupon(item)(10).price === 180);


// function diff(x) {
//     return function(y) {
//         return x-y;
//     }
// }

// console.log(diff(3)(1));