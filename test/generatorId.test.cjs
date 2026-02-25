const test = require('node:test');
const assert = require('node:assert/strict');
const { getId } = require('../generatorId');

test('getId returns 6-char alphanumeric id', () => {
  const id = getId();
  assert.equal(id.length, 6);
  assert.match(id, /^[0-9a-zA-Z]{6}$/);
});

test('getId is not constant', () => {
  const a = getId();
  const b = getId();
  assert.notEqual(a, b);
});
