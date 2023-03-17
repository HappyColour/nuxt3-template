<template>
  <div>
    {{ r }}
    {{ u }}
  </div>
</template>
<script setup>
/**
 * 阶乘
 * 10! = 10 * 9 * 8 * ... *1
 */
function loopRun(num){
  let result = 1
  for(let i = 2;i <= num;i++) {
    result *= i // result = result * i
  }
  return result
}
let r = ref(loopRun(10))
console.log(r);


function loopRunDG(num){
  if(num === 1) {return 1}
  return loopRunDG(num - 1) * num
  /**
   * loopRunDG(10)
   *  - return loopRunDG(9) * 10
   *  - return loopRunDG(8) * 9
   *  - return loopRunDG(7) * 8
   *  - return loopRunDG(6) * 7
   *  - return loopRunDG(5) * 6
   *  - return loopRunDG(4) * 5
   *  - return loopRunDG(3) * 4
   *  - return loopRunDG(2) * 3
   *  - return loopRunDG(1) * 2
   *  - return 1
   */ 
}
let u = ref(loopRunDG(10))
console.log(u);

/**
 * 一对兔子生后的两个月后每个月都能生一对小兔子
 * 计算第N个月的兔子的数量
 * 1 2 3 4 5 6 7 8  9 10 11 12
 * 1 1 2 3 5 8 13 21 .....
 * 规律，当前数等于两个数之和（斐波那契数列）
 */
function countNum(month){
  if(month < 3) {
    return 1
  }
  return countNum(month - 1) + countNum(month - 2)
}
let rabitNum = countNum(12)
console.log('12个月后兔子的数量', rabitNum);
  
</script>
