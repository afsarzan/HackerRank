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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let [time, period] = [s.slice(0, -2), s.slice(-2)];
    let [hh, mm, ss] = time.split(':');
    
    hh = parseInt(hh);
    
    if (period === 'AM') {
        hh = hh === 12 ? '00' : hh.toString().padStart(2, '0');
    } else {
        hh = hh === 12 ? '12' : (hh + 12).toString();
    }
    
    return `${hh}:${mm}:${ss}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
