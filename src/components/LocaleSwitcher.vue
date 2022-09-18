<template lang="pug">
.switcher
    span.cursor-pointer(class="hover:text-white" @click="switchLocale(locale)") {{ locale === 'en' ? 'PL' : 'EN' }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { availableLocales, locale } = useI18n()

const switchLocale = (l: string) => {
    if (l === 'en') {
        locale.value = 'pl'
        localStorage.setItem('currentLocale', 'pl')
    } else {
        locale.value = 'en'
        localStorage.setItem('currentLocale', 'en')
    }
}
</script>