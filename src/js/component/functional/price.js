export const price = cents => {
	return "$" + (cents / 100).toFixed(2);
};

export default {
	price: price
};
