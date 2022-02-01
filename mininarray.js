function maxInArray(arr){
    let min = Infinity;
    for(let i =0;i<arr.length;i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min

}

let arr = [4,5,6,4,3,56,2,5,-5]
console.log(maxInArray(arr));