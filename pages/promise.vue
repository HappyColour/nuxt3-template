<template>
  <div>
    
  </div>
</template>
<script setup>
const PROMISE_STATE = {
  PENDING: 0,
  FULFILLED: 1,
  REJECTED: 2
}
class bPromise{
  #result
  #state = PROMISE_STATE.PENDING // pending 0 fulfilled 1 rejected 2
  #callbacks = []
  constructor(executor){
    executor(this.#resolve.bind(this), this.#reject.bind(this))
  }
  #resolve(value){
    console.log('value', value);
    if(this.#state !== PROMISE_STATE.PENDING) return
    this.#result = value
    this.#state = PROMISE_STATE.FULFILLED
    queueMicrotask(()=>{
      this.#callbacks.forEach(cb =>{
        cb()
      })
    })
  }
  // #resolve = ()=>{ console.log(this) }
  #reject(){}
  then(onFulfilled, onRejected){
    return new bPromise((resolve, reject)=>{
      if(this.#state === PROMISE_STATE.PENDING) {
        this.#callbacks.push(()=>{
          resolve(onFulfilled(this.#result))
        })
      }else if(this.#state === PROMISE_STATE.FULFILLED) {
        /**
         * then只能读取同步数据，不能读取异步数据
         */
        queueMicrotask(()=>{
          resolve(onFulfilled(this.#result))
        })
      }
    })
  }
}
const p = new bPromise((resolve, reject)=>{
  setTimeout(() => {
    resolve('1')
    resolve('2')
  }, 1000);
})
console.log('p', p);
p.then(result => {
  console.log('result', result);
})
p.then(result => {
  console.log('2');
})
p.then(result => {
  console.log('3');
})

p.then(r =>{
  console.log('1', r);
  return 'a'
}).then(r =>{
  console.log('2', r);
  return 'b'
}).then(r =>{
  console.log('3', r);
  return 'c'
})
</script>