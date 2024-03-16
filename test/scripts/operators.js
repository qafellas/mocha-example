import { expect } from "chai"

describe('Operator Tests', ()=>{
    it('should expect correct addition', ()=>{
        expect(1+1).to.equal(2)
    })

    it('should expect correct multiplication', ()=>{
        expect(3*4).to.equal(12)
    })

    it('should expect correct division', ()=>{
        expect(18/9).to.equal(23)
    })

    it('should expect correct subtraction', ()=>{
        expect(3-4).to.equal(-1)
    })
})