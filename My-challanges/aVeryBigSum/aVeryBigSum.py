def aVeryBigSum(ar):
    # Write your code here
    sum = 0 
    for x in ar:
        sum += x
    return sum 

ar = [1000000001,1000000002, 1000000003, 1000000004, 1000000005]

aVeryBigSum(ar)