<template>
  <div>
    
  </div>
</template>
<script setup>
/* 
  正则表达式
      - 正则表达式用来定义一个规则
      - 通过这个规则计算机可以检查一个字符串是否符合规则
          或者将字符串中符合规则的内容提取出来
      - 正则表达式也是JS中的一个对象，
          所以要使用正则表达式，需要先创建正则表达式的对象
*/


// new RegExp() 可以接收两个参数（字符串） 1.正则表达式 2.匹配模式
let reg = new RegExp("a", "i") // 通过构造函数来创建一个正则表达式的对象

// 使用字面量来创建正则表达式：/正则/匹配模式
reg = /a/i

reg = /\w/

reg = new RegExp("\\w")

// console.log(reg)

reg = new RegExp("a") // /a/ 表示，检查一个字符串中是否有a

// 通过正则表达式检查一个字符串是否符合规则
let str = "a"

let result = reg.test(str) // true

result = reg.test("b") // false
result = reg.test("abc") // true
result = reg.test("bcabc") // true

reg = /a/

console.log(result);

</script>