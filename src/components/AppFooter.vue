<template lang="pug">
.footer.bg-md-black.text-2xl.relative
    .footer-inner.flex.flex-col.items-center.gap-4.pt-10.pb-4.px-20(class="lg:pt-8 lg:pb-4")
        .logo-social(class="lg:hidden")
            AppIcon(name="logoGrey" width="150px" height="auto")
        AppNavigation(:hiddenOnMob="false").flex.flex-col.gap-2.my-12.items-center(class="lg:flex-row lg:justify-between lg:gap-10 lg:mb-16")
        SocialIcons
    .logo-social.hidden.absolute.top-12.left-20(class="lg:flex")
        AppIcon(name="logoGrey" width="150px" height="auto")
</template>
    
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSiteStore } from './../stores/SiteStore';
import SocialIcons from './SocialIcons.vue';
import AppNavigation from './AppNavigation.vue';

const store = useSiteStore();
const { navLinks } = storeToRefs(store)
</script>