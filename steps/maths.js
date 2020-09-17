const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect

let answer = 0

Given('I Start with {int}', function(int) {
  answer = int
})

When('I add {int}', function(int) {
  answer += int
})

Then('I end up with {int}', function(int) {
  expect(answer).to.equal(int)
})
