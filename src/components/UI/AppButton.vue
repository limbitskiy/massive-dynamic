<template lang="pug">
button.font-medium.rounded-xl.px-6.py-4.whitespace-nowrap(:class="currentStyle, currentSize" @click="clickAction")
    slot
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Styles } from '../../types'

const styleTypes: Styles = {
    primary: 'bg-md-accent text-black',
    secondary: 'bg-md-accent'
}

const sizes: Styles = {
    normal: 'text-base',
    big: 'text-4xl',
}

const props = defineProps({
    type: {
        default: 'primary'
    },
    size: {
        default: 'normal'
    },
    action: {
        type: String
    },
})

const currentStyle = computed(() => styleTypes[props.type])
const currentSize = computed(() => sizes[props.size])

const clickAction = () => console.log(`Going to: ${props.action}`)
</script>