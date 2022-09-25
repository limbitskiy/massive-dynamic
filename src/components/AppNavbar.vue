<template lang="pug">
.nav.bg-md-grey.flex.items-center.justify-between.px-10.h-24(class="lg:h-32")
    AppIcon(name="logoGrey" width="80px" height="80px")
    .links.hidden.gap-16(class="lg:flex lg:ml-16")
        router-link.text-xl(v-for="link in navLinks" :to="link.href") {{ link.text }}
    .btn-wrap.hidden(class="lg:flex lg:items-center lg:gap-4")
        LocaleSwitcher
        AppButton(type="primary" action="www.google.com") 
            .text-xl {{ $t('navbar button') }}
    .mob-button-wrap.flex.items-center.gap-6(class="lg:hidden")
        LocaleSwitcher
        button.w-6(@click="toggleMobile")
            AppIcon(:name="mobMenuIcon" width="20px")
    transition(name="slideLeft")
        .mob-menu.absolute.left-0.right-0.top-24.bottom-0.bg-md-black.text-3xl.px-20.flex(v-if="isOpen")
            ul.flex.flex-col.gap-12.pt-20
                li(v-for="link in navLinks" :key="link.id")
                    span.cursor-pointer(@click = "mobNavigateTo(link.href)") {{ link.text }}
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useSiteStore } from './../stores/SiteStore';
import LocaleSwitcher from './LocaleSwitcher.vue';

const router = useRouter()

const store = useSiteStore();
const { navLinks } = storeToRefs(store)

const mobMenuIcon = computed(() => isOpen.value ? 'times' : 'bars')

const isOpen = ref(false)

const mobNavigateTo = (href: string) => {
    toggleMobile()
    router.push(href)
}

const toggleMobile = () => {
    isOpen.value = !isOpen.value
    document.body.classList.toggle('scroll-lock')
}
</script>