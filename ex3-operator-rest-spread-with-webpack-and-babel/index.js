const product = {
	name: 'Black Bic Pen',
	price: 1.90,
	discount: 0.95
};

function clone(obj) {
	return { ...obj}
}

const newProduct = clone(product);
newProduct.name = 'Blue Bic Pen';

console.log(product, newProduct);