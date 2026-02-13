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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    //1 -> 5
    //2 -> 4,5
    //3 -> 3,4,5
    for( let i = 0; i<n;i++){
        let res = ""
        for(let j=0;j<n;j++){
            res+= ((n-i)-1>j) ? " " : "#"; 
        }
        console.log(res);

        // one liner
        console.log('#'.repeat(i).padStart(n));
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
