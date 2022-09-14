<template lang="pug">
.nav.flex.items-center.justify-between.px-10.h-24(class="lg:h-32")
    slot(name="logo")
    .links.hidden.gap-16(class="lg:flex")
        slot(name="links")
    .btn-wrap.hidden(class="lg:flex")
        slot(name="button")
    button.w-6(class="lg:hidden" @click="toggleMobile")
        svg(fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20")
            path(d="M2 2h18M2 10h18M2 18h18" stroke="grey" stroke-width="3" stroke-linecap="round")

    .mob-menu.absolute.left-0.right-0.top-24.bottom-0.bg-md-black.text-3xl.px-20.flex(v-if="isOpen")
        ul.flex.flex-col.gap-12.pt-20
            li(v-for="link in props.navLinks" :key="link.id")
                AppLink(:href="link.href") {{ link.text }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps(['logo', 'navLinks'])

const isOpen = ref(false)

const toggleMobile = () => {
    isOpen.value = !isOpen.value
    document.body.classList.toggle('scroll-lock')
}
</script>