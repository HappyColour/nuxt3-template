<template>
  <div id="deepClone" class="flex flex-col">
    <h1>deepClone Module</h1>
    <h2>copyA：{{ copyA }}</h2>
    <h2>a：{{ a }}</h2>
    <h2>{{ a.sayHello() }}</h2>
    <h2>{{ copyA.sayHello() }}</h2>
  </div>
</template>
<script setup>
console.log('deepClone');
const deepClone = obj => {
  if(typeof obj !== 'object' || typeof obj === null) {
    return obj
  }
  const newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    newObj[key] = deepClone(obj[key])
  }
  return newObj
}
const a = {
  name: 'Danny Zhang',
  age: 18,
  render: '男',
  sayHello(){
    console.log('Hello!', this.name)
    return this.name
  },
  body: {
    face: 'awesome',
    skin: 'yellow'
  }
}
const copyA = reactive(deepClone(a))
copyA.name = 'deepClone-Danny'
copyA.body.face = 'deepClone-awesome'
copyA.sayHello()
console.log('copyA', copyA);
console.log('A', a);
console.log('A-say', a.sayHello());

</script>