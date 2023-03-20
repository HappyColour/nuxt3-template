<template lang="">
  <div>
    
  </div>
</template>
<script setup>
const obj = { name: "孙悟空", age: 18, gender: "男" }

// let { name, age, gender } = obj // 声明变量同时解构对象

let name, age, gender

;({ name, age, gender } = obj)

let { address } = obj // 没有的属性返回undefined

// console.log(name, age, gender)

let {name:a, age:b, gender:c, address:d="花果山"} = obj

console.log(a, b, c, d)
</script>
<style lang="">
  
</style>