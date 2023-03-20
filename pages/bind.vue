<template>
  <div></div>
</template>
<script setup>
/*      
  根据函数调用方式的不同，this的值也不同：
      1. 以函数形式调用，this是window
      2. 以方法形式调用，this是调用方法的对象
      3. 构造函数中，this是新建的对象
      4. 箭头函数没有自己的this，由外层作用域决定
      5. 通过call和apply调用的函数，它们的第一个参数就是函数的this
      6. 通过bind返回的函数，this由bind第一个参数决定（无法修改）

  bind() 是函数的方法，可以用来创建一个新的函数
      - bind可以为新函数绑定this
      - bind可以为新函数绑定参数

  箭头函数没有自身的this，它的this由外层作用域决定，
      也无法通过call apply 和 bind修改它的this 
      箭头函数中没有arguments
*/

function fn(a, b, c) {
  console.log("fn执行了~~~~", this);
  console.log(a, b, c);
}

const obj = { name: "孙悟空" };

const newFn = fn.bind(obj, 10, 20, 30);

// newFn()

const arrowFn = () => {
  console.log(this);
};

// arrowFn.call(obj)

const newArrowFn = arrowFn.bind(obj);

// newArrowFn()

class MyClass {
  fn = () => {
    console.log(this);
  };
}

const mc = new MyClass();

// mc.fn.call(window)
</script>
