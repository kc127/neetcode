const { orderBy } = require("lodash");

function solution(n) {
    let moves = [];
    let rodA = [];
    for (let i = n; i > 0; i--) {
        rodA.push(i);
    }
    let rodB = [];
    let rodC = [];
    let j = rodA.length - 1;
    console.log(rodA)
    while (j < rodA.length) {
        console.log("here")
        if (rodC.length === 0) {
            rodC.push(rodA[j]);
            moves.push(`Disk ${rodA[j]} to Rod C`)
            j--;
        }
    }

    return moves;
}
/*


            1
            2
            3
            4


 */
