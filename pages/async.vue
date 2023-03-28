<template>
  <div>
    <h1>输出顺序：1 promise2 promise-pending 4 7 2 promise5 6 5 3</h1>
  </div>
</template>
<script setup>
// 1 promise2 promise-pending 4 7 2 promise5 6 5 3
const p = async ()=> {
  console.log(1)
  console.log(Promise.resolve(2)); 
  Promise.resolve(2).then(r=>{console.log(r);})
  const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(3)
    },2000)
  })
  console.log(p1);
  p1.then(r=>{
    console.log(r);
  })
  await console.log(4)
  console.log(Promise.resolve(5));
  Promise.resolve(5).then(r=>{console.log(r);})
  console.log(6)
}
p()
console.log(7);
</script>