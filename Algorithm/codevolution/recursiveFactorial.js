function recursiveFactorial(n){
    if(n === 0) return 1
    return n * recursiveFactorial(n -1)
} // O(n)

console.log(recursiveFactorial(5));