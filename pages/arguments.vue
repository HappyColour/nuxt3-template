<template>
  <div>
    <h2>arguments是函数中又一个隐含参数</h2>
    <h2>arguments是一个类数组对象（伪数组）和数组相似，可以通过索引来读取元素，也可以通过for循环变量，但是它不是一个数组对象，不能调用数组的方法</h2>
    <h2>arguments用来存储函数的实参，无论用户是否定义形参，实参都会存储到arguments对象中，可以通过该对象直接访问实参</h2>
    <h2>可变参数，在定义函数时可以将参数指定为可变参数
      - 可变参数可以接收任意数量实参，并将他们统一存储到一个数组中返回
      - 可变参数的作用和arguments基本是一致，但是也具有一些不同点：
          1. 可变参数的名字可以自己指定
          2. 可变参数就是一个数组，可以直接使用数组的方法
          3. 可变参数可以配合其他参数一起使用
    </h2>
  </div>
</template>
<script>
function fn() {
  console.log(arguments);
  console.log(arguments.length);
}
fn(1, 10)

function sum(a, b){
  return a + b
}
console.log(sum(1, 2)); 


function fn3(a, b, ...args) {
    // for (let v of arguments) {
    //     console.log(v)
    // }
    console.log(args)
}

fn3(123, 456, "hello", true, "1111")



function sum2(...num) {
    return num.reduce((a, b) => a + b, 0)
}

console.log(sum2(1,2,3,4,5,6,7));

</script>