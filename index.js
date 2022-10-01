const user = { id: 50, name: 'Leon', job: 'student' };
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);


const shop = {
    name: 'being human',
    address: 'Gulsan',
    products: ['shirts', 'tshirts', 'glasses'],
    profit: 150000,
    isExpensive: true
}
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);