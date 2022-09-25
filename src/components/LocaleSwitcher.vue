<template lang="pug">
.switcher
    span.cursor-pointer(class="hover:text-white" @click="switchLocale(locale)") {{ locale === 'en' ? 'PL' : 'EN' }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n()

const switchLocale = (l: string) => {
    if (l === 'en') {
        document.body.classList.toggle('opacity-0')
        setTimeout(() => {
            document.body.classList.toggle('opacity-0')
            locale.value = 'pl'
            localStorage.setItem('currentLocale', 'pl')
        }, 500)
    } else {
        document.body.classList.toggle('opacity-0')
        setTimeout(() => {
            document.body.classList.toggle('opacity-0')
            locale.value = 'en'
            localStorage.setItem('currentLocale', 'en')
        }, 500)
    }
}
</script>