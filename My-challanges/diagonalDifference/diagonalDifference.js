function diagonalDifference(arr) {
    // Write your code here
    let l = arr.length 
    let diagonal1 = 0 
    let diagonal2 = 0 
    let difference = 0

    for(let i = 0; i < l; i++){
        for(let j = 0; j < l; j++){
            if ( i === j){
                diagonal1 += arr[i][j] 
            } 
            if ( (i + j) === (l - 1)){
                diagonal2 += arr[i][j]
            }  
        }
    } 
    return Math.abs( diagonal1 - diagonal2)

} 

arr = [[2, 3, 4], [5, 3, -1], [9, 8, -2]] 
diagonalDifference(arr)