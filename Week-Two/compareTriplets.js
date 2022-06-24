function compareTriplets(a, b) {
    // Write your code here
    let sumA = 0; 
    let sumB = 0; 
    let output = [];  
    
    for (let i=0; i < a.length; i++ ){
        if (a[i] > b[i]){
           sumA += 1;
        } else if(b[i] > a[i]){
           sumB += 1; 
        } 
        output = [sumA, sumB]; 
    } 
    
    return output; 
}

let a = [17, 28, 30]; 
let b = [99, 16, 8]; 

compareTriplets(a,b); 