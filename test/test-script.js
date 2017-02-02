/*jshint esversion: 6 */

const chai = require('chai');

chai.should();

const bubbleSort = require('../bubble-sort.js');

describe('myArray', () => {
  let myArray = bubbleSort;

  it('should be a class', ()=>{
    myArray.should.be.a.function
  });

  it('shoud be a integer', () => {
    myArray.should.have.property(integer);
  });
});

describe('', () => {
  //TEST HEEEERE

});