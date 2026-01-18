const arr =  [3,2,4,1];
//sample output [1,4,2,3]

const reverseArray = (arr : number[]): number[] => {
  const newArray = []
  let n = arr.length -1;
  for(let i=0 ; i <= n  ; i++){
    newArray.push(arr[n-i]);
  }
  return newArray;
}

const result = reverseArray(arr);

console.log(result); 