const products = [
   {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},

   {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},

   {name: 'watch', price: 3200, brand: 'casio', color: 'black'},

   {name: 'sunalss', price: 300, brand: 'ribon', color: 'silver'},

   {name: 'camera', price: 3200, brand: 'canon', color: 'silver'},
   
];

const brand = products.map(product => product.brand);
// console.log(brand);
const price = products.map(product => product.price);
// console.log(price);

// products.forEach(products => console.log(products))
// products.forEach(products => console.log(products.color))

products.forEach(products => {

})

// 3. filer 
const cheap = products.filter(products => products.price <= 5000);
// console.log(cheap)

const SpecificName = products.filter(p => p.name.includes('n'));
// console.log(SpecificName)

// 4. find
const soecial = products.find(p => p.name.includes('n'))
console.log(soecial)
