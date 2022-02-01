function fibonacchi(n){
    if(n<=1){
        return n 
    }
    else{
        
        return fibonacchi(n-1)+fibonacchi(n-2)

    }
    // let fib = [0,1]
    // for(let i = 2 ; i<n;i++){
    //     fib[i] = fib[i-2] + fib[i-1]
    // }
    // return fib
}

console.log(fibonacchi(10))