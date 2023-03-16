<template>
  <div id="closure">
    
  </div>
</template>
<script setup>
function outer() {
  let num = 0
  return (() => {
    num++
    console.log(num);
  })
}

const cc = outer()
// console.log(cc);
cc()
cc()
cc()

</script>