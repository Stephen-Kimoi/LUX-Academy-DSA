function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let noOfApples = 0 
    let noOfOranges = 0

    let applesDistance = apples.map(applesDistanceFunction)
    let orangesDistance = oranges.map(orangesDistanceFunction)

    function applesDistanceFunction(x) {
        return a + x; 
    }

    function orangesDistanceFunction(y) {
        return b + y; 
    }
    
    for(let i = 0; i < apples.length; i++){
       if (applesDistance[i] >= s && applesDistance[i] <= t){
           noOfApples += 1
       } 
    }  

    for (let j = 0; j < oranges.length; j++){
        if(orangesDistance[j] >= s && orangesDistance[j] <= t){
           noOfOranges += 1
        }
    }
    console.log(noOfApples)
    console.log(noOfOranges)

}

countApplesAndOranges( 7, 11, 5, 15, [-2,2,1], [5,-6])