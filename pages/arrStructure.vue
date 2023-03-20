<template>
  <div>
    
  </div>
</template>
<script setup>
/*
  解构赋值
*/

const arr = ["孙悟空", "猪八戒", "沙和尚"]

let a,
    b,
    c

    // a = arr[0]
    // b = arr[1]
    // c = arr[2]
;[a, b, c] = arr // 解构赋值

let [d, e, f, g] = ["唐僧", "白骨精", "蜘蛛精", "玉兔精"] // 声明同时解构

console.log(d, e, f, g)
// ;[d, e, f, g] = [1, 2, 3]
// ;[d, e, f = 77, g = 10] = [1, 2, 3]
;[d, e, f = 77, g = g] = [1, 2, 3]

let [n1, n2, ...n3] = [4, 5, 6, 7] // 解构数组时，可以使用...来设置获取多余的元素

// console.log(n1, n2, n3)


function fn(){
    return ["二郎神", "猪八戒"]
}

let [name1, name2] = fn()

// 可以通过解构赋值来快速交换两个变量的值
let a1 = 10
let a2 = 20

// let temp = a1
// a1 = a2
// a2 = temp

;[a1, a2] = [a2, a1] // [20, 10]

const arr2 = ["孙悟空", "猪八戒"]
// console.log(arr2)

;[arr2[0], arr2[1]] = [arr2[1], arr2[0]]
// console.log(arr2)


// console.log("a1 =", a1)
// console.log("a2 =", a2)


/* 
    数组中可以存储任意类型的数据，也可以存数组,
        如果一个数组中的元素还是数组，则这个数组我们就称为是二维数组
*/

const arr3 = [["孙悟空", 18, "男"], ["猪八戒" ,28, "男"]]

// for(let stu of arr3){
//     for(let v of stu){
//         console.log(v)
//     }
// }


let [[name, age, gender], obj] = arr3

console.log(name, age, gender)
console.log(obj)

</script>