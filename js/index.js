'use strict';


const pow = (num, exp)=>{
  if(typeof num !=='number' || typeof exp !=='number'){
    return new TypeError('Value must be number');
  }
  if(exp<0){
    return new RangeError('Invalid value exp. Exp must >0');
  }
  if(exp===0){
    return 1;
  }
  return num*pow(num, exp-1);
}
console.log(pow(2, -2));