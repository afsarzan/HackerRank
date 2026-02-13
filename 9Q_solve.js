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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const map = {
        'p': 0,
        'n': 0,
        'z': 0
    };
    
    arr.forEach( a => {
        if(a>0){
            map['p'] = (map['p'] || 0) + 1
        }if(a<0){
            map['n']= (map['n'] || 0) + 1
        }if(a===0){
            map['z'] = (map['z'] || 0) + 1
        }
    })
    for( const m in map){
        console.log(map[m]/arr.length)
    }

    //withoug map

     const n = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    arr.forEach(num => {
        if (num > 0) positive++;
        else if (num < 0) negative++;
        else zero++;
    });
    
    console.log((positive / n).toFixed(6));
    console.log((negative / n).toFixed(6));
    console.log((zero / n).toFixed(6));

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
