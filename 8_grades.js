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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    const result = []
    for( let i =0; i<grades.length; i++){
        if(grades[i] <38) {
            result.push(grades[i]);
            continue;
        }
        
        const nextMultiple = grades[i]-(grades[i]%5)+5;
        const res = (nextMultiple - grades[i]);
         if( res < 3){
            result.push(nextMultiple)
        }else{
            result.push(grades[i])
        } 
    }
    return result


    // one liner
     return grades.map(g => {
        const next = Math.ceil(g / 5) * 5;
        return g < 38 || next - g >= 3 ? g : next;
    });
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
