export const Q_Array = [];
export const A_Array = [];

Q_Array[0] = "write a code to illustrate all parameter of reduce.";

export function Q1() {
  [4, 6, 8].reduce((acc, curr, i, arr) => {
    console.log("accumulator", acc);
    console.log("currentValue", curr);
    console.log("index", i);
    console.log("array", arr);
    return acc + 2;
  }, 0);
}

A_Array[0] = `
  [4, 6, 8].reduce((acc, curr, i, arr) => {
    console.log("accumulator", acc);
    console.log("currentValue", curr);
    console.log("index", i);
    console.log("array", arr);
    return acc + 2;
  }, 0);

  output:
          accumulator 0
          currentValue 4
          index 0
          array (3) [4, 6, 8]
          accumulator 2
          currentValue 6
          index 1
          array (3) [4, 6, 8]
          accumulator 4
          currentValue 8
          index 2
          array (3) [4, 6, 8]
`;

Q_Array[1] =
  "Write a function sumArray(arr) that returns the sum of all the elements in an input array.";

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

let sum = 0;
sum = sumArray([3, 5, 2, 7]);

A_Array[1] = `
  function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
  }
  let sum = 0;
  sum = sumArray([3, 5, 2, 7]);

  output: ${sum}
`;
