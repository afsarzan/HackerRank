'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here\
    let leftD = 0;
    let rightD = 0;
    
    for( let i = 0; i< arr.length; i++){
        for(let j = 0; j< arr[i].length;j++){
            // 00, 11 ,22
            // 02 ,11, 20
            if(i==j){
                leftD += arr[i][j]
            }
            //     console.log({i,j})
            //  if(i+j == 2){
            //     console.log({i,j})
            //     console.log('-->' + arr[i][j])
            //     rightD += arr[i][j]
            // }
             if(i==j){
                leftD += arr[i][j]
            }
            
             if(i == (arr[j].length-1)-j){     
                rightD += arr[i][j]
            }
        }
    }
        return Math.abs(leftD-rightD)

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
