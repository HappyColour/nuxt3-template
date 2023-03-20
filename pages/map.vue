<template lang="">
  <div>
    
  </div>
</template>
<script setup>
/* 
Map
    - Map用来存储键值对结构的数据（key-value）
    - Object中存储的数据就可以认为是一种键值对结构
    - Map和Object的主要区别：
        - Object中的属性名只能是字符串或符号，如果传递了一个其他类型的属性名，
            JS解释器会自动将其转换为字符串
        - Map中任何类型的值都可以称为数据的key
*/

const obj2 = {}

const obj = {
    "name":"孙悟空",
    'age':18,
    [Symbol()]:"哈哈",
    [obj2]:"嘻嘻"
}

// console.log(obj)

/* 
  创建：
      new Map()

  属性和方法：
      map.size() 获取map中键值对的数量
      map.set(key, value) 向map中添加键值对
      map.get(key) 根据key获取值   
      map.delete(key) 删除指定数据
      map.has(key) 检查map中是否包含指定键
      map.clear() 删除全部的键值对

*/

// 创建一个Map
const map = new Map()

map.set("name", "孙悟空")
map.set(obj2, "呵呵")
map.set(NaN, "哈哈哈")

map.delete(NaN)
// map.clear()

console.log(map)
console.log(map.get("name"))
console.log(map.has("name"))
/*  */

const map1 = new Map()

map1.set("name", "孙悟空")
map1.set("age", 18)
map1.set({}, "呵呵")

// 将map转换为数组
// const arr = Array.from(map) // [["name","孙悟空"],["age",18]]
// const arr = [...map]

// console.log(arr)

const map2 = new Map([
    ["name", "猪八戒"],
    ["age", 18],
    [{}, () => {}],
])

// console.log(map2)

// 遍历map
// for (const [key, value] of map) {
//     // const [key, value] = entry
//     console.log(key, value)
// }

// map.forEach((key, value)=>{
//     console.log(key, value)
// })

/* 
    map.keys() - 获取map的所有的key
    map.values() - 获取map的所有的value
*/

for(const key of map.keys()){
    console.log(key)
}
</script>