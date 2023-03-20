<template lang="">
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

*/
function fn() {
  console.log("函数执行了~", this);
}

const obj = { name: "孙悟空", fn };

/* 
  调用函数除了通过 函数() 这种形式外，还可以通过其他的方式来调用函数
      比如，我们可以通过调用函数的call()和apply()来个方法来调用函数
          函数.call()
          函数.apply()
          - call 和 apply除了可以调用函数，还可以用来指定函数中的this
          - call和apply的第一个参数，将会成为函数的this
          - 通过call方法调用函数，函数的实参直接在第一个参数后一个一个的列出来
          - 通过apply方法调用函数，函数的实参需要通过一个数组传递
*/

// fn.call(obj)
// fn.apply(console)

function fn2(a, b) {
  console.log("a =", a, "b =", b, this);
}

// fn2.call(obj, "hello", true)
fn2.apply(obj, ["hello", true]);
</script>
