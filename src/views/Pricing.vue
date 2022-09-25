<template lang="pug">
transition(name="contentFadeIn" appear)
    .content
        AppSection
            .text-center.mx-auto(class="lg:w-2/3")
                h1.h1 {{$t('pricing title')}}
                p.mx-auto.my-4(class="lg:w-2/3") {{$t('pricing subtitle')}}
                .btn-container.flex.justify-center.gap-4.my-8
                    AppButton(:type="activeBtn === btnStates[0] ? 'secondary' : 'inactive'" @click="changeBtn") {{ $t('pricing monthly') }}
                    AppButton(:type="activeBtn === btnStates[1] ? 'secondary' : 'inactive'" @click="changeBtn") {{ $t('pricing yearly') }}

            .cards
                ul.flex.justify-center.flex-col.flex-wrap.gap-4(class="sm:flex-row")
                    li.pill.flex.flex-col.gap-6.rounded-3xl.bg-md-grey.p-6(v-for="cardNo in 3" class="lg:flex-1 lg:p-10" style="flex-basis: 380px")
                        TextBlock(:beforeTitle="$t(`pricing card${cardNo} before title`)" :title="$t(`pricing card${cardNo} title ${computedLine}`)"  titleColor="#fff")
                            p {{ $t(`pricing card${cardNo} subtitle`) }}
                            ul.my-4
                                li.text-xl.text-white.mb-4(v-for="lineNo in 5")
                                    div.flex.items-center.gap-4
                                        AppIcon(name='check' width="18px")
                                        span {{ $t(`pricing card${cardNo} line${lineNo}`) }}
                            template(#button)
                                div.mt-8
                                    AppButton.w-full(type="primary" action="www.google.com") {{ $t(`pricing card${cardNo} button`) }}
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TextBlock from '../components/UI/TextBlock.vue';

const changeBtn = () => {
    activeBtn.value = activeBtn.value === btnStates[0] ? btnStates[1] : btnStates[0]
}

const computedLine = computed((n) => {
    return activeBtn.value === btnStates[0] ? btnStates[0] : btnStates[1]
})

const btnStates = ['monthly', 'yearly']

const activeBtn = ref(btnStates[0])
</script>