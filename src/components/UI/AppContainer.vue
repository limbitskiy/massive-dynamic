<template lang="pug">
.container.w-full(:style="{ backgroundColor: color }")
    slot
</template>

<script setup lang="ts">
defineProps({
    color: {
        type: String,
        default: 'primary'
    },
})
</script>