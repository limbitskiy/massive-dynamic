<template lang="pug">
.switcher
    ul
        li.cursor-pointer(v-for="locale in availableLocales" :key="locale" @click="switchLocale(locale)") {{ locale }}
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { availableLocales, locale } = useI18n()


const switchLocale = (l: string) => {
    locale.value = l
}
</script>