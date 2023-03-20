<template>
  <div>
    
  </div>
</template>
<script setup>
/* 
  Set
      - Set用来创建一个集合
      - 它的功能和数组类似，不同点在于Set中不能存储重复的数据

  - 使用方式：
      创建
          - new Set()
          - new Set([...])

      方法
          size 获取数量
          add() 添加元素
          has() 检查元素
          delete() 删除元素
          
*/

// 创建一个Set
const set = new Set()

// 向set中添加数据
set.add(10)
set.add("孙悟空")
set.add(10)

// console.log(set)

// for(const item of set){
//     console.log(item)
// }

const arr = [...set]

// console.log(arr)

const arr2 = [1,2,3,2,1,3,4,5,4,6,7,7,8,9,10]

const set2 = new Set(arr2)

console.log([...set2])
</script>
<style>
  
</style>