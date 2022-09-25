<template lang="pug">
.text-block
    span.text-xl.text-md-accent {{ beforeTitle }}
    h2(:style="{ color: titleColor, maxWidth: width }" class="lg:text-6xl lg:mb-4").text-3xl.font-bold.leading-tight.mx-auto {{ title }}
    p
        slot
    slot(name="button")
</template>

<script setup lang="ts">
defineProps(['beforeTitle', 'title', 'titleColor', 'width', 'titleSize'])
</script>