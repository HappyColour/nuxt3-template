<script setup>
const props = defineProps({
  list: Object,
  isShow: Boolean
})
</script>
<template>
    <ul v-show="isShow">
      <li v-for="(item, index) in list" :key="index" :data-id="index">{{ item.title }}</li>
    </ul>
</template>