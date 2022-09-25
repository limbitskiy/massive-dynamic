<template lang="pug">
transition(name="contentFadeIn" appear)
    .content
        AppSection
            .text-center.mx-auto(class="lg:w-2/3")
                h1.h1 {{$t('support title')}}
                p.mx-auto.my-4(class="lg:w-2/3") {{$t('support subtitle')}}
                .btn-container.flex.justify-center.gap-4.my-8
            .text-center.mx-auto(class="lg:w-2/3")
                h3.h3 {{$t('support faq title')}}
            .pill.rounded-3xl.bg-md-grey.p-4.mt-8(class="lg:p-11")
                .faq-item.mb-8(v-for="item in 4")
                    h3.h3 {{ $t(`support faq ${item}q title`) }}
                    p {{ $t(`support faq ${item}q answer`) }}
</template>