const assert = require("node:assert/strict");

const employeeDiscounts = {
  cold: 0.5,
  dessert: 0.4,
  "bento-cake": 0.35,
};

function draftItemDiscount(item, employeeDiscount = true) {
  if (!employeeDiscount) return 0;
  if (item.group && employeeDiscounts[item.group]) return employeeDiscounts[item.group];
  if (item.type === "dessert") return employeeDiscounts.dessert;
  return employeeDiscounts[item.categoryId] || 0;
}

function draftItemTotal(item, employeeDiscount = true) {
  return Math.round(item.price * item.quantity * (1 - draftItemDiscount(item, employeeDiscount)) * 100) / 100;
}

const mixedOrder = [
  { price: 100, quantity: 2, categoryId: "cold", type: "drink" },
  { price: 110, quantity: 1, categoryId: "desserts", type: "dessert" },
  { price: 980, quantity: 1, categoryId: "desserts", type: "dessert", group: "bento-cake" },
];

assert.equal(draftItemDiscount(mixedOrder[0]), 0.5);
assert.equal(draftItemDiscount(mixedOrder[1]), 0.4);
assert.equal(draftItemDiscount(mixedOrder[2]), 0.35);

assert.equal(draftItemTotal(mixedOrder[0]), 100);
assert.equal(draftItemTotal(mixedOrder[1]), 66);
assert.equal(draftItemTotal(mixedOrder[2]), 637);

assert.equal(
  mixedOrder.reduce((sum, item) => sum + draftItemTotal(item), 0),
  803,
);

assert.equal(
  mixedOrder.reduce((sum, item) => sum + draftItemTotal(item, false), 0),
  1290,
);
