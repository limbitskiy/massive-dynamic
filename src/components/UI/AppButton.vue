<template lang="pug">
button.font-medium.rounded-xl.whitespace-nowrap(:class="currentStyle, currentSize" @click="clickAction")
    slot
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import type { Styles } from '../../types'

const router = useRouter()

const styleTypes: Styles = {
    primary: 'bg-md-accent text-black app-button',
    secondary: 'bg-md-grey',
    inactive: 'hover:text-white',
}

const sizes: Styles = {
    normal: 'text-xl px-6 py-4',
    big: 'text-5xl px-8 py-6',
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

const clickAction = () => {
    if (typeof props.action === 'undefined') return
    if (props.action[0] === '#') {
        const link = props.action?.slice(1)
        const html = document.querySelector('html')
        html!.classList.add('scroll-smooth')
        setTimeout(() => {
            html!.classList.remove('scroll-smooth')
        }, 1000)
        document.getElementById(link!)!.scrollIntoView();
    } else {
        router.push(props.action)
    }
}
</script>