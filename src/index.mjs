//array.reduce 
Array.prototype.myreduce = function (callbackfn ,initialValue){
  console.log(initialValue)
  console.log(this);

  let accumulator = initialValue? initialValue : this[0]
  let startIndex = initialValue ? 0 : 1
 
  for(let i = startIndex; i < this.length ; i++){
    const currentelementValue = this[i]
    const response = callbackfn(accumulator ,currentelementValue ,i ,this);
    accumulator = response
  }
  return accumulator;
}

const nums = [10 ,20 ,30 , 40];

function callbackfn(accumulator ,currentValue , currentIndex ,array){
  return accumulator + currentValue
}

let initialValue;

const res = nums.myreduce(callbackfn ,initialValue);
console.log(res)

