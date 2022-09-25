<template lang="pug">
transition(name="contentFadeIn" appear)
    .content
        AppSection
            AppHero

        //- first section
        AppSection
            TextBlock.text-center.mb-6(class="lg:my-14" titleColor="#fff" :title="$t('first section title')") {{ $t('first section subtitle') }}

            .fixedImg.grid.gap-8(class="lg:grid-cols-2")
                .img-wrap(class="lg:row-span-3")
                    .pill.bg-md-grey.rounded-3xl.p-11.sticky.top-16
                        AppPicture(name="webApp" width="auto" height="auto" class="md:hidden")
                        AppPicture.hidden(name="webApp" width="auto" height="300px" class="md:block")
                IconItem(icon="bullseye" :title="$t('first section pill1 title')" :text="$t('first section pill1 subtitle')")
                IconItem(icon="lightning" :title="$t('first section pill2 title')" :text="$t('first section pill2 subtitle')")
                IconItem(icon="shapes" :title="$t('first section pill3 title')" :text="$t('first section pill3 subtitle')")

        //- second section
        AppSection(color="#fff")
            p.text-center.text-3xl.text-md-black.font-medium.my-16 {{ $t('second section title') }}

            .pill.bg-md-accent.rounded-3xl.py-14.w-full.flex.justify-center
                AppPicture(name="webApp" width="100%" height="auto" maxHeight="900px")

            p.text-center.text-3xl.text-md-black.font-medium.my-16(class="lg:w-2/3 lg:mx-auto") {{ $t('second section subtitle') }}

        //- third section
        AppSection
            .split.text-center(class="xl:flex xl:flex-row-reverse")
                AppPicture(name="webApp" width="100%" height="auto" maxWidth="850px")
                .flex.items-center.mt-8(class="lg:p-16")
                    TextBlock(:beforeTitle="$t('third section part1 before title')" :title="$t('third section part1 title')" titleColor="#fff") {{ $t('third section part1 subtitle') }}
                        template(#button)
                            div.mt-8
                                AppButton(type="primary" action="#features") {{ $t('third section part1 button') }}

            .split.text-center.mt-4(class="xl:flex")
                AppPicture(name="webApp" width="100%" height="auto" maxWidth="850px")
                .flex.items-center.mt-8(class="lg:p-16")
                    TextBlock(:beforeTitle="$t('third section part2 before title')" :title="$t('third section part2 title')" titleColor="#fff") {{ $t('third section part2 subtitle') }}
                        template(#button)
                            div.mt-8
                                AppButton(type="primary" action="#features") {{ $t('third section part2 button') }}

        //- section four
        AppSection(id='features')
            .fixedImg.grid.gap-8(class="lg:grid-cols-2")
                .fixed-wrap(class="lg:row-span-4")
                    .sticky.top-16(class="lg:p-11")
                        TextBlock(:beforeTitle="$t('section four fixed part before title')" :title="$t('section four fixed part title')" titleColor="#fff") {{ $t('section four fixed part subtitle') }}
                            template(#button)
                                div.mt-8
                                    AppButton.w-full(type="primary" action="pricing" class="lg:w-min") {{ $t('section four fixed part button') }}

                IconItem(icon="rocket" :title="$t('section four pill1 title')" :text="$t('section four pill1 subtitle')")
                IconItem(icon="lightning" :title="$t('section four pill2 title')" :text="$t('section four pill2 subtitle')")
                IconItem(icon="shop" :title="$t('section four pill3 title')" :text="$t('section four pill3 subtitle')")
                IconItem(icon="keyboard" :title="$t('section four pill4 title')" :text="$t('section four pill4 subtitle')")

        //- section five
        AppSection
            .pill.bg-md-grey.p-4.rounded-3xl.w-full.flex.flex-col.gap-16(class="xl:flex-row lg:p-11")
                .split.flex-1.flex.justify-center
                    AppPicture(name="webApp2" width="100%" height="auto" maxWidth="500px")
                .split.flex-1.mt-4
                    h2.h1.mb-16 {{ $t('section five title') }}
                    AppButton.w-full(type="primary" action="pricing")
                        p.text-2xl(class="lg:text-4xl") {{ $t('section five button') }}
</template>

<script setup lang="ts">
import AppHero from '../components/AppHero.vue';
import IconItem from '../components/IconItem.vue';
</script>