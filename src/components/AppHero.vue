<template lang="pug">
.bg-md-grey.rounded-tl-3xl.rounded-tr-3xl.rounded-bl-3xl
    .split(class="xl:flex")
        .inner-padding.flex.flex-col.gap-4.flex-1(class="lg:gap-8")
            .custom-element.flex.items-center.gap-4.rounded-full.border-gray-400.border-solid.border-2.px-1.w-fit(class="lg:py-3 lg:px-4")
                AppIcon(name="star")
                span.mr-2.leading-none {{$t('hero icon text')}}
            h1.h1 {{$t('hero main text')}}
            div.my-4(class="lg:flex lg:flex-row-reverse lg:gap-8 lg:mt-8")
                p {{ $t('hero sub text') }}
                AppButton.mt-4(type="primary" action="www.youtube.com")
                    p.text-2xl(class="lg:text-4xl") {{ $t('hero button') }}
        .outer-wrap.w-full.flex.justify-end.hidden.flex-1(class="md:flex")
            .svg-wrap.flex.flex-col.justify-end.w-full
                AppPicture(name="heroPic" width="100%" height="auto")
</template>