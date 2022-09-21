// JS Object notation
// JSON
const user = { id: 11, name: 'Leon', job: 'Developer' };
// console.log(user);
const stringiFied = JSON.stringify(user);
// console.log(stringiFied);

const shop = {
    name: 'Being Human',
    adress: 'Banani',
    profit: 150000,
    owner: {
        name: 'Salman Khan',
        profession: 'Actor'
    },
    products: ['tshirt', 'jeans', 'shirts'],
    isExpensive: true,
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
//! remove stringify..................................................
const unStringified = JSON.parse(shopStringified);
console.log(unStringified);
