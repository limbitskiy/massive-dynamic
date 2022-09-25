<template lang="pug">
AppNavbar

router-view

AppFooter
</template>

<script setup lang="ts">
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()


onBeforeMount(() => {
    locale.value = localStorage.getItem('currentLocale') || 'en'
})
</script>