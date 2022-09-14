<template lang="pug">
.text-block
    span.text-xl.text-md-accent {{ props.beforeTitle }}
    h2.text-6xl.text-white.font-bold.leading-tight.mb-4 {{ props.title }}
    p
        slot
    slot(name="button")
</template>

<script setup lang="ts">
const props = defineProps(['beforeTitle', 'title'])
</script>