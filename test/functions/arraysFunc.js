class ArrayFunctions{
    sumOfArrayElements(arr){
        let sum = 0
        for (const element of arr) {
            sum += element
        }
        return sum
    }

    maxNumOfArray(arr){
        let max = arr[0]
        for (let index = 0; index < arr.length; index++) {
           if(arr[index] > max) {
            max = arr[index]
           } 
        }
        return max
    }

    minNumOfArray(arr){
        let min = arr[0]
        for (let index = 0; index < arr.length; index++) {
           if(arr[index] < min) {
            min = arr[index]
           }
        }
        return min
    }

}
export default new ArrayFunctions()