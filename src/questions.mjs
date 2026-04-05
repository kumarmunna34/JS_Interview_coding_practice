// import

export let Q_Array = ["Ques1", "Ques2", "Ques3"];
export let A_Array = ["Answer1", "Answer2", "Answer3"];

//write a code to illustrate all parameter of reduce.

// Q_Array[0] = "write a code to illustrate all parameter of reduce.";

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
