const assert = require("node:assert/strict");
const checkoutApi = require("../api/checkout");

const employeeDiscounts = {
  cold: 0.5,
  "pumpkin-latte": 0.5,
  mochaccino: 0.5,
  "hazelnut-cocoa": 0.5,
  dessert: 0.4,
  "bento-cake": 0.35,
  "mousse-torte": 0.35,
};

function draftItemDiscount(item, { employeeDiscount = true, freeDiscount = false } = {}) {
  if (freeDiscount) return 1;
  if (!employeeDiscount) return 0;
  if (item.id && employeeDiscounts[item.id]) return employeeDiscounts[item.id];
  if (item.group && employeeDiscounts[item.group]) return employeeDiscounts[item.group];
  if (item.type === "dessert") return employeeDiscounts.dessert;
  return employeeDiscounts[item.categoryId] || 0;
}

function draftItemTotal(item, discounts) {
  return Math.round(item.price * item.quantity * (1 - draftItemDiscount(item, discounts)));
}

const mixedOrder = [
  { price: 100, quantity: 2, categoryId: "cold", type: "drink" },
  { price: 110, quantity: 1, categoryId: "desserts", type: "dessert" },
  { price: 980, quantity: 1, categoryId: "desserts", type: "dessert", group: "bento-cake" },
  { id: "mousse-torte", price: 650, quantity: 1, categoryId: "desserts", type: "dessert" },
  { id: "pumpkin-latte", price: 90, quantity: 1, categoryId: "hot", type: "drink" },
  { id: "mochaccino", price: 90, quantity: 1, categoryId: "hot", type: "drink" },
  { id: "hazelnut-cocoa", price: 90, quantity: 1, categoryId: "hot", type: "drink" },
];

assert.equal(draftItemDiscount(mixedOrder[0]), 0.5);
assert.equal(draftItemDiscount(mixedOrder[1]), 0.4);
assert.equal(draftItemDiscount(mixedOrder[2]), 0.35);
assert.equal(draftItemDiscount(mixedOrder[3]), 0.35);
assert.equal(draftItemDiscount(mixedOrder[4]), 0.5);
assert.equal(draftItemDiscount(mixedOrder[5]), 0.5);
assert.equal(draftItemDiscount(mixedOrder[6]), 0.5);
assert.equal(draftItemTotal(mixedOrder[3]), 423);
assert.equal(draftItemTotal(mixedOrder[4]), 45);
assert.equal(draftItemTotal(mixedOrder[5]), 45);
assert.equal(draftItemTotal(mixedOrder[6]), 45);

assert.equal(draftItemTotal(mixedOrder[0]), 100);
assert.equal(draftItemTotal(mixedOrder[1]), 66);
assert.equal(draftItemTotal(mixedOrder[2]), 637);

assert.equal(
  mixedOrder.reduce((sum, item) => sum + draftItemTotal(item), 0),
  1361,
);

assert.equal(
  mixedOrder.reduce((sum, item) => sum + draftItemTotal(item, { employeeDiscount: false }), 0),
  2210,
);

assert.equal(draftItemDiscount(mixedOrder[0], { employeeDiscount: false, freeDiscount: true }), 1);
assert.equal(
  mixedOrder.reduce((sum, item) => sum + draftItemTotal(item, { employeeDiscount: false, freeDiscount: true }), 0),
  0,
);

assert.equal(draftItemTotal({ price: 0.4, quantity: 1 }, { employeeDiscount: false }), 0);
assert.equal(draftItemTotal({ price: 0.5, quantity: 1 }, { employeeDiscount: false }), 1);

assert.equal(
  checkoutApi.isValidCheckoutPayload({
    city: "kharkiv",
    name: "Bubble Tea",
    type: "drink",
    quantity: 2,
    total: 1,
    payment: "cash",
  }),
  true,
);

assert.equal(
  checkoutApi.isValidCheckoutPayload({
    city: "kharkiv",
    name: "Bubble Tea",
    type: "drink",
    quantity: 2,
    total: 100,
    payment: "cash",
  }),
  true,
);
