import { expect } from "chai"
import StringFunc from '../functions/stringsFunc.js'

describe('String Tests', ()=>{
    it('should reverse string', ()=>{
        let str = 'Orhan'
        expect(StringFunc.reverseString(str)).to.equal('nahrO')
    })

    it('should convert string to upper case form', ()=>{
        let str = 'xyz'
        expect(StringFunc.capitalizeString(str)).to.equal('XYZ')
    })

    it('should check specific letter in string ', ()=>{
        let str = 'Hey yo'
        expect(StringFunc.containsLetter(str, 'o')).to.be.true
    })
})