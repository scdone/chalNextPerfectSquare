function nextSquare(num) {
    let firstSquare = Math.sqrt(num)
    if(firstSquare % 1 != 0){
        return -1
    } 
    else {
        return Math.pow((firstSquare + 1), 2)
    }
}

console.log(nextSquare(9))
console.log(nextSquare(289))
console.log(nextSquare(3000))