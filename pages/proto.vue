<template lang="">
  <div></div>
</template>
<script setup>
class Person {
  name = "孙悟空";
  age = 18;

  sayHello() {
    console.log("Hello，我是", this.name);
  }
}

class Dog {}

const p = new Person();
const p2 = new Person();

p.sayHello = "hello";

const d = new Dog();
const d2 = new Dog();

/* 
                所有的同类型对象它们的原型对象都是同一个，
                    也就意味着，同类型对象的原型链是一样的

                原型的作用：
                    原型就相当于是一个公共的区域，可以被所有该类实例访问，
                        可以将该类实例中，所有的公共属性（方法）统一存储到原型中
                        这样我们只需要创建一个属性，即可被所有实例访问

                    JS中继承就是通过原型来实现的,
                        当继承时，子类的原型就是一个父类的实例

                在对象中有些值是对象独有的，像属性（name，age，gender）每个对象都应该有自己值，
                    但是有些值对于每个对象来说都是一样的，像各种方法，对于一样的值没必要重复的创建

                尝试：
                    函数的原型链是什么样子的？
                    Object的原型链是什么样子的？

                
            
            */

// console.log(p)
// console.log(p2)
// console.log(p.__proto__ === p2.__proto__)

class Animal {}

class Cat extends Animal {}

class TomCat extends Cat {}

// TomCat --> cat --> Animal实例 --> object --> Object原型 --> null

// cat --> Animal实例 --> object --> Object原型 --> null
// p对象 --> object --> Object原型 --> null
const cat = new Cat();

console.log(cat.__proto__.__proto__.__proto__.__proto__);
</script>
<style lang=""></style>
