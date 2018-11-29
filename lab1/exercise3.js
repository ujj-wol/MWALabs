const item = {
    'name': 'Biscuits',
    'type': 'regular',
    'category': 'food',
    'price': 200
};

function applyCoupon(item) {
    console.log(item.price);
    return function(discount) {
        item.price = item.price-(discount*item.price/100);
        console.log(item.price);
        return item;
    }
}
// console.log(applyCoupon(item)(10).price === 180);

function applyCoupon1(item, discount) {
    console.log(item.price);
    item.price = item.price-(discount*item.price/100);
    console.log(item.price);
    return item;
}
//console.log(applyCoupon1(item, 10).price === 180);

var applyCouponNew = applyCoupon1.bind({},item);
console.log(applyCouponNew(10).price == 180);

// function diff(x) {
//     return function(y) {
//         return x-y;
//     }
// }

// console.log(diff(3)(1));