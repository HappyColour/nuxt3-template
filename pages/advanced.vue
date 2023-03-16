<template>
  <div>
    <h2>newArr: {{ newArr }}</h2>
  </div>
</template>
<script setup>
/**
 * 高阶函数
 */
class Person {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}
const personArr = [new Person("孙悟空", 18),new Person("沙和尚", 20),new Person("唐三藏", 30),new Person("八戒", 30)]
const newArr = reactive([]) // const newArr = ref([])
function filterContent(target, cb){
  for (let i = 0; i < target.length; i++) {
    if(cb(target[i])) {
      newArr.push(target[i]) // newArr.value.push(target[i])
    }
  }
  console.log(newArr);
  // return newArr
}
filterContent(personArr, a => a.name === '孙悟空' || a.name === '八戒')
</script>
<style>
  
</style>