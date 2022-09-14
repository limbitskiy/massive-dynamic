<template lang="pug">
.pill.flex.gap-6.rounded-3xl.bg-md-grey.p-11
    .icon-box
        AppIcon(:name="props.icon")
    .meta-box
        h3.text-white.text-4xl.font-medium.mb-4 {{ props.title }}
        p {{ props.text }}
</template>

<script setup lang="ts">
const props = defineProps(['icon', 'title', 'text'])
</script>