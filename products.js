
/**
 * Module dependencies.
 */

var products = [
  {
    name: 'Clement',
    price: 8.95,
    sku: 'toast-001'
  },
  {
    name: 'Lombard',
    price: 8.95,
    sku: 'toast-002'
  },
  {
    name: 'Valencia',
    price: 8.95,
    sku: 'toast-003'
  },
  {
    name: 'Jones',
    price: 8.95,
    sku: 'toast-004'
  },
  {
    name: 'Sutter',
    price: 8.95,
    sku: 'toast-005'
  },
  {
    name: 'Natoma',
    price: 8.95,
    sku: 'toast-006'
  }
];

/**
 * Return a random product.
 */

exports.product = function() {
  return products[Math.floor(Math.random() * products.length)];
}
