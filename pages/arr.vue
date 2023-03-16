<template>
  <div id="arr">
    {{ arr }}
    {{ arr2 }}
    {{ arr3() }}
  </div>
</template>
<script setup>
const arr = reactive([])
const target = [1,1,2,2,3,4,2,1,5,6,7,8,6,5,4,7,8,9,10,9,10,0]
for (const item of target) {
  if(arr.indexOf(item) === -1) {
    arr.push(item)
    arr.sort((a, b)=>{return a-b})
  }
}
const arr2 = [...new Set(target)].sort((a,b)=>{return b-a})
const arr3 = ()=>{
  const obj = {}
  for (const v of target) {
    obj[v] = v
  }
  const w = Object.keys(obj)
  const key = w.map(Number)
  // console.log(key);
  // or
  const key2 = []
  for (const s of w) {
    let k2 = Number(s)
    key2.push(k2)
  }
  // console.log(key2);
  return key
}
arr3()
// 冒泡
/**
 * 1,3,2,8,0,5,7,6,4,9
 * 1,2,3,
 */
const arr4 = [9,1,3,2,8,0,5,7,6,4]
for(let i = 0;i< arr4.length - 1;i++) {
  for(let j = 0;j < arr4.length - 1 - i;j++) {
    if(arr4[j] > arr4[j+1]) {
      let temp = arr4[j]
      arr4[j] = arr4[j+1]
      arr4[j+1] = temp
    }
  }
}
console.log('arr4', arr4);
</script>