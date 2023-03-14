<template>
  <div id="class">
    {{ a }}
  </div>
</template>
<script setup>
class Person {
  #name
  #age
  constructor(name, age) {
    this.#name = name
    this.#age = age
  }
  set setName(name){
    this.name = name
  }
  get getName(){
    return this.name
  }
}
const a = reactive(new Person())
a.name = 'Danny'
a.age = 16
</script>