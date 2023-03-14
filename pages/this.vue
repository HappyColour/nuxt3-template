<template lang="">
  <div>
    <h2>本页面测试Vue this的指向</h2>
    <h2>html中this指向</h2> <a href="/this.html">传送门</a>
  </div>
</template>
<script setup>
console.log('====组合式====');
function fn(){
  console.log('fn', this);
}
fn()
onMounted(()=>{
  console.log('onMounted', this);
})
const fn2 = ()=>{
  console.log('fn2', this);
}
fn2()
const a = {
  name: 'Danny',
  sayHello(){
    console.log('a-sayHello', this.name);
  }
}
a.sayHello()
a.name = 'Dannys'
a.sayHello()
</script>
<script>
export default {
  mounted() {
    console.log('====选项式====');
    console.log(this);
    this.fn()
    const a = {
      name: 'Danny',
      sayHello(){
        console.log('a-sayHello', this.name);
      }
    }
    a.sayHello()
  },
  methods: {
    fn(){
      console.log('fn', this);
    }
  },
}
</script>