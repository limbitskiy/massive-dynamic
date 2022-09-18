<template lang="pug">
.pill.flex.flex-col.gap-6.rounded-3xl.bg-md-grey.p-4(class="lg:flex-row lg:p-11")
    .icon-box
        AppIcon(:name="props.icon")
    .meta-box
        h3.h3 {{ props.title }}
        p {{ props.text }}
</template>

<script setup lang="ts">
const props = defineProps(['icon', 'title', 'text'])
</script>