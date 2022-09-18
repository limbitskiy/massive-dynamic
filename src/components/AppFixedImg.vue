<template lang="pug">
.fixedImg.grid.gap-8(class="lg:grid-cols-2")
    slot(name="image")
    slot(name="pill1")
    slot(name="pill2")
    slot(name="pill3")
</template>

<script setup lang="ts">
import AppPill from './UI/AppPill.vue';
import IconItem from './IconItem.vue';
</script>