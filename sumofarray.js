function sumOfArray(arr){
    let sum = 0
    for (let i =0 ; i< arr.length ; i++){
        sum += arr[i]
    }
    return sum;

}

let arr = [5,6,7,8,8]
console.log(sumOfArray(arr));