<template>
  <div id="fff">
    <div>
      <h2 class="w-20 md:w-32">abcd</h2>
      <div class="space-y-4">
        <div class="flow-root ...">
          <div class="my-4 ...">1</div>
        </div>
        <div class="flow-root ...">
          <div class="my-4 ...">2</div>
        </div>
      </div>
      <div v-if="pending">Loading ...</div>
      <div v-else>
        <div v-for="key in posts">
          <!-- do something -->
        </div>
      </div>
    </div>
    <h2 v-for="(key, value, index) in as" :key="index">
      {{ value }}：{{ key }}
    </h2>
    <div>
      {{ title }}
    </div>
    <div>
      {{ count }}
    </div>
    <h2
      :title="abc"
      @click="
        abc += '|';
        isRED = !isRED;
        curColor = curColor === 'pink' ? 'blue' : 'pink';
      "
      :class="{ red: isRED }"
      class="overflow"
      :style="{ color: curColor, overflow: 'hidden' }"
    >
      HELLO FK
    </h2>
    {{ isRED }}
  </div>
  <button @click="count++">button</button>
  <button @click="reverse">reverse</button>
  <button @click="title += '!'">append!</button>
  <a href="https://github.com" @click.prevent>link prevent</a>
  <h2>Checkbox</h2>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">Checked: {{ checked }}</label>

  <input type="text" placeholder="请输入..." v-model="form1" />
  <h1>form1 : {{ form1 }}</h1>
  <select v-model="form2">
    <option value="男">男</option>
    <option value="女">女</option>
    <option value="老">老</option>
    <option value="少">少</option>
  </select>
  <h2>form2: {{ form2 }}</h2>
  <input type="checkbox" v-model="form3" />
  <h3>form3: {{ form3 }}</h3>
  <input type="checkbox" v-model="form4" value="a" />
  <input type="checkbox" v-model="form4" value="b" />
  <input type="checkbox" v-model="form4" value="c" />
  <h4>form4 {{ form4 }}</h4>
  <ol>
    <TodoItem
      v-for="item in groceryList"
      :todo="item"
      :key="item.id"
      :id="`part${item.id}`"
      :class="`part${item.id}`"
    ></TodoItem>
  </ol>
  <FloatLayer><h2 style="color: pink">嘎嘎嘎</h2></FloatLayer>
  <button id="show-modal" @click="showModal = true">Show Modal</button>

  <Teleport to="body">
    <!-- 使用这个 modal 组件，传入 prop -->
    <modal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
  <div class="w-80 m-20">
    <nuxt-img src="/beauty.webp" loading="lazy" quality="80" />
  </div>
  <h2>{{ $device }}</h2>
  <div id="tailwind-template">
    <!-- <h2>{{ tailwindConfig }}</h2> -->
    <TButton>Button</TButton>
  </div>
  <div class="w-20 h-20 bg-slate-50">
    <h2 class="p-5">asd</h2>
  </div>
  <div class="flex space-x-20">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="space-y-10">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Views</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Intro to CSS</td>
        <td>Adam</td>
        <td>858</td>
      </tr>
      <tr class="bg-emerald-200">
        <td>
          A Long and Winding Tour of the History of UI Frameworks and Tools and
          the Impact on Design
        </td>
        <td>Adam</td>
        <td>112</td>
      </tr>
      <tr>
        <td>Intro to JavaScript</td>
        <td>Chris</td>
        <td>1,280</td>
      </tr>
    </tbody>
  </table>
  <div class="w-1/3 mx-auto bg-purple-500 text-center p-10 rounded-lg">
    <div class="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
      <div class="bg-white">1</div>
      <div class="col-start-3 bg-white">2</div>
      <div class="bg-white">3</div>
      <div class="bg-white">4</div>
      <div class="row-start-1 col-start-2 col-span-2 bg-white">5</div>
    </div>
  </div>
</template>
<script setup>
import tailwindConfig from "#tailwind-config";
const showModal = ref(false);
const groceryList = ref([
  { id: 0, text: "Vegetables" },
  { id: 1, text: "Cheese" },
  { id: 2, text: "Whatever else humans are supposed to eat" },
]);
const form1 = ref("");
const form2 = ref("男");
const form3 = ref(true);
const form4 = ref(["a"]);
const checked = ref(true);
const title = ref("Vue3 Start");
const count = ref(0);
const abc = ref("FK");
const curColor = ref("pink");
const isRED = ref(true);

const getDa = () => {
  console.log("123");
};
console.log(getDa());

async function getData() {
  const r = await fetch("https://api.github.com/orgs/nuxt");
  return r;
}
function reverse() {
  title.value = title.value.split("").reverse().join("");
}
onMounted(() => {
  getData()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {});
});
const { data: as } = await useFetch("https://api.github.com/orgs/nuxt");
const { pending, data: posts } = useLazyFetch(
  "https://api.github.com/orgs/nuxt"
);
watch(posts, (newPosts) => {
  // console.log('newPosts', newPosts);
  // Because posts starts out null, you will not have access
  // to its contents immediately, but you can watch it.
});
const data = await $fetch("https://api.github.com/orgs/nuxt");
// console.log('!!!data', data);
</script>
<style>
.red {
  background-color: red;
}
</style>
