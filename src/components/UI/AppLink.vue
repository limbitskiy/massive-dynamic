<template lang="pug">
a(class="hover:text-white" :href="props.href")
    slot
</template>

<script setup lang="ts">
const props = defineProps(['href', 'title'])
</script>