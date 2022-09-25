<template lang="pug">
.links.gap-8(class="lg:flex lg:gap-16" :class="{hidden: hiddenOnMob}")
    router-link.text-xl(v-for="link in navLinks" :to="link.href" :class="{active: route.name === link.text}" class="hover:text-white") {{ link.text }}
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useSiteStore } from './../stores/SiteStore';

defineProps({
    hiddenOnMob: {
        type: String,
        default: true
    },
})

const route = useRoute()

const store = useSiteStore();
const { navLinks } = storeToRefs(store)
</script>