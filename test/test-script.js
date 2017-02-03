/*jshint esversion: 6 */

const chai = require('chai');

chai.should();

const bubbleSort = require('../bubble-sort.js');

describe('The Cases of Edge', () => {

  it('should be a function', ()=>{
    bubbleSort.should.be.a('function');
  });

  it('shoud be not be an array', () => {
    bubbleSort.should.not.be.an('array');
  });

  it('should not be a boolean',()=>{
    bubbleSort.should.not.be.a('boolean');
  });

  it('should not be a string', ()=>{
    bubbleSort.should.not.be.a('string');
  });

  it('should not be null', ()=>{
    bubbleSort.should.not.equal('null');
  });

  it('should return an array', ()=>{
    bubbleSort([9,2,5,6,4,3,7,10,1,8]).should.be.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should not return an object', ()=>{
    bubbleSort([{}, {}, {},{}]).should.not.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });

  it('should not return the same numbers', ()=>{
    bubbleSort([1,1,1,1,1,1,1]).should.not.deep.equal([1,2,3,4,5,6,7,8,9,10]);
  });
});