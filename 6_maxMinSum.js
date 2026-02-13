'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr = arr.sort((a,b) => a-b);
    const res = arr.reduce( (acc,item) => item + acc,0);
    console.log(`${res-arr[arr.length-1]} ${res-arr[0]}`)


    // second approach without sort
    let total = 0;
    let min = arr[0];
    let max = arr[0];
    
    for (let num of arr) {
        total += num;
        if (num < min) min = num;
        if (num > max) max = num;
    }
    
    console.log((total - max) + ' ' + (total - min));
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
