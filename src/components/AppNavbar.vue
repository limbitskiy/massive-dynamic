<template lang="pug">
.nav.bg-md-grey.flex.items-center.justify-between.px-10.h-24(class="lg:h-32")
    AppIcon(name="logoGrey" width="80px" height="80px")
    .links.hidden.gap-16(class="lg:flex lg:ml-16")
        AppLink.text-xl(v-for="link in navLinks" :key="link" :href="link.href") {{ link.text }}
    .btn-wrap.hidden(class="lg:flex lg:items-center lg:gap-4")
        LocaleSwitcher
        AppButton(type="primary" action="www.google.com") 
            .text-xl {{ $t('navbar button') }}
    .mob-button-wrap.flex.gap-6(class="lg:hidden")
        LocaleSwitcher
        button.w-6(@click="toggleMobile")
            svg(fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20")
                path(d="M2 2h18M2 10h18M2 18h18" stroke="grey" stroke-width="3" stroke-linecap="round")
    .mob-menu.absolute.left-0.right-0.top-24.bottom-0.bg-md-black.text-3xl.px-20.flex(v-if="isOpen")
        ul.flex.flex-col.gap-12.pt-20
            li(v-for="link in navLinks" :key="link.id")
                AppLink(:href="link.href") {{ link.text }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSiteStore } from './../stores/SiteStore';
import LocaleSwitcher from './LocaleSwitcher.vue';

const store = useSiteStore();
const { navLinks } = storeToRefs(store)

const isOpen = ref(false)

const toggleMobile = () => {
    isOpen.value = !isOpen.value
    document.body.classList.toggle('scroll-lock')
}
</script>