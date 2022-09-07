<template lang="pug">
button(:class="currentStyle") {{ props.value }}
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const styleTypes: { [a: string]: string } = {
    primary: 'bg-md-accent text-black',
    secondary: 'bg-md-accent'
}
const props = defineProps(['value', 'type'])

const currentStyle = computed(() => styleTypes[props.type])

</script>