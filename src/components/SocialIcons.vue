<template lang="pug">
.social-icons.flex(:class="gap")
    .social-icon(v-for="item in props.items" :key="item.id")
        AppLink(:href="item.link")
            AppIcon(
                :name="item.type"
                :width="item.size[0]"
                :height="item.size[1]"
                :fill="item.color"
                )
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['items', 'gap'])

const gap = computed(() => `gap-${props.gap}`)
</script>