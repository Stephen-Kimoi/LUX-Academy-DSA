def compareTriplets(a, b):
    # Write your code here 
    output = [0, 0]
    l = len(a) 

    for x in range(l): 
        if a[x] > b[x]: 
            output[0] += 1 
        elif a[x] < b[x]: 
            output[1] += 1 
        else: 
            continue
            
    print(output) 


a = [17, 28, 30] 
b = [99, 16, 8] 

compareTriplets(a,b)