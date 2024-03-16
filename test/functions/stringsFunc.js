class StringFunctions{
    reverseString(str){
        let reversed = ''
        for (let index = str.length-1; index >=0 ; index--) {
            reversed += str[index]
        }
        return reversed
    }

    capitalizeString(str){
        return str.toUpperCase()
    }

    containsLetter(str, letter){
        let condition = false
        if(str.includes(letter)){
            condition = true
        }
        return condition
    }
}
export default new StringFunctions()