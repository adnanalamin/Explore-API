const user = {id:1, name:'Gorib Amir', job:'Actor'};
// JavaScript Object Notation = (JSON)
const stringify = JSON.stringify(user);
// console.log(stringify);
// console.log(user);



const shop = {
    owner: 'Alia',
    address:{
        street: 'kocokhet vuter goli',
        city: 'pambir',
        country: 'BD' 
    },
    products:['Laptop', 'mic', 'Monitor','Keybord'],
    revenue: 45000,
    isOpen: true,
    isNew:false
}
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObject = JSON.parse(shopJSON);
console.log(shopObject);