import { expect } from "chai"
import ArrayFunc from '../functions/arraysFunc.js' 

describe('Array Tests', ()=>{
    it('should add all elements of array', ()=>{
        const result = ArrayFunc.sumOfArrayElements([1,2,3,4])
        expect(result).to.equal(10)
    })

    it('should find max number in array', ()=>{
        expect(ArrayFunc.maxNumOfArray([34,6,0,87,1,23])).to.equal(87)
    })

    it('should find min number in array', ()=>{
        expect(ArrayFunc.minNumOfArray([34,6,0,87,1,23])).to.equal(0)
    })

})