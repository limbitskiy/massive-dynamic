<template lang="pug">
.pill.bg-md-grey(:class="corners, padding")
    slot
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Styles } from '../../types'

const props = defineProps({
    corners: {
        default: 'rounded'
    },
    padding: {
        default: 'padding'
    }
})

const styles: Styles = {
    rounded: 'rounded-3xl',
    hero: 'rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl',
    padding: 'p-11',
    noPadding: ''
}

const corners = computed(() => styles[props.corners])
const padding = computed(() => styles[props.padding])
</script>