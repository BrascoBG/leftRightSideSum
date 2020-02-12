function test(args){
  let n = (args.length - 1) / 2;
  let leftSum = 0;
  let rightSum = 0;

  for(let i = 1; i <= n; i++){
    let currentNum = args[i];
    leftSum += currentNum;
  }
  for(let j = n + 1; j < args.length; j++){
    let currentNums = args[j];
    rightSum += currentNums;
  }
  
  if(leftSum === rightSum){
    console.log('Yes! Sum = ' + leftSum);
  } else{
    console.log("No! Diff = " + Math.abs(leftSum - rightSum));
  }
  
}
test([4,55,55,100,15]);
