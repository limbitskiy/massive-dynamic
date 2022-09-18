<template lang="pug">
.social-icons.flex.justify-evenly.gap-4
    a(class="app-link" :href="item.link" v-for="item in socialIcons" :key="item.id")
        AppIcon(
            :name="item.type"
            :width="item.size[0]"
            :height="item.size[1]"
            :fill="item.color"
            )
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSiteStore } from './../stores/SiteStore';

const store = useSiteStore();
const { socialIcons } = storeToRefs(store)
</script>

<style>
.app-link:hover path {
    fill: #60D284
}
</style>