<template lang="pug">
AppButton(value="Hello" type="primary")
font-awesome-icon(icon="fa-solid fa-store").text-md-accent
</template>

<script setup lang="ts">
import AppButton from './components/UI/AppButton.vue'
import { useSiteStore } from './stores/SiteStore';

const store = useSiteStore();
</script>