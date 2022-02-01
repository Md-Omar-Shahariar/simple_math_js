function maxInArray(arr){
    let largest = -9999;
    for(let i =0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest

}

let arr = [4,5,6,4,3,56,2,5]
console.log(maxInArray(arr));