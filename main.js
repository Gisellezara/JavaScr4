// EASY
let numbers=[ 1 , 4 , 7]
var total= 0;
for(i=0; i< numbers.length; i++){
    total += numbers[i];
}
var avg= total/ numbers.length;
console.log(avg);

//medium

let num= [ 4,5,6,7,0,1,2];
console.log(num.indexOf(0));


// VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

// Example 1:

// Input: coins = [1, 2, 5], amount = 11

// Output: 3 
// nput: coins = [2], amount = 3

// Output: -1

//first we would have to make an arry coins = [1, 2, 5]
//then we would have to make a for loop with a condition to have a modulest 
//then have an if statment and including Math.





