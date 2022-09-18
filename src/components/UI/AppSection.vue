<template lang="pug">
.section.w-full.py-8.px-4(:style="{ backgroundColor: color }" class="lg:px-14")    
    slot
</template>

<script setup lang="ts">
defineProps({
    color: {
        type: String,
        default: '#121315'
    },
})
</script>