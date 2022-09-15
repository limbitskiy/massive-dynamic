<template lang="pug">
.text-block
    span.text-xl.text-md-accent {{ beforeTitle }}
    h2(:style="{ color: titleColor, maxWidth: width }").text-6xl.font-bold.leading-tight.mb-4.mx-auto {{ title }}
    p
        slot
    slot(name="button")
</template>

<script setup lang="ts">
defineProps(['beforeTitle', 'title', 'titleColor', 'width', 'titleSize'])
</script>