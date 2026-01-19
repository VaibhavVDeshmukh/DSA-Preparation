const input:number[][] = [[1,1,1,0,0,0],[0,1,0,0,0,0],[1,1,1,0,0,0],[0,0,2,4,4,0],[0,0,0,2,0,0],[0,0,1,2,4,0]];
//output should be 19

const findMaxHourGlassSum = (arr: number[][]): number => {
    let max: number = -Infinity;
    let curr: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+2]) {
            const innerArr = arr[i];
            const innerArr2 = arr[i+1];
            const innerArr3 = arr[i+2];
            for (let j = 0; j < innerArr.length; j++) {
                if (innerArr[j+2]) {
                    curr = innerArr[j] + innerArr[j+1] + innerArr[j+2]+
                    innerArr2[j+1]+
                    innerArr3[j] + innerArr3[j+1] + innerArr3[j+2];
                    if (curr>max) {
                    max= curr;
                    }
                }
            }
        }
    }
    return max;
}

console.log(findMaxHourGlassSum(input));