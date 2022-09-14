<template lang="pug">
.split(class="xl:flex")
    .text-wrap.flex.flex-col.gap-8.p-11
        .custom-element.flex.items-center.gap-4.rounded-full.border-gray-400.border-solid.border-2.py-3.px-4.w-fit
            AppIcon(name="star")
            span Software raises $1m per year
        h1.text-5xl.text-white.font-bold.leading-tight.mb-4(class="xl:text-7xl") Cloud Based Tool&nbsp;That Helps Create&nbsp;Perfect Products
        div.mt-8(class="md:flex md:flex-row-reverse md:gap-8")
            p {{ text }}
            AppButton(type="primary" size="big" action="www.google.com") Get Started
    .outer-wrap.w-full.flex.justify-end
        .svg-wrap.flex.flex-col.justify-end.w-full
            svg(fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 99")
                path(d="M62.397 22.801h5.476M62.397 39.355h5.476" stroke="#18156E" stroke-miterlimit="10" stroke-linecap="round")
                path(d="M152.575 98.063H0V5.335A4.335 4.335 0 0 1 4.335 1h143.9a4.334 4.334 0 0 1 4.335 4.335l.005 92.728Z" fill="#fff")
                path(d="M152.575 11.801H0V4.809A4.3 4.3 0 0 1 4.305.501H148.27a4.295 4.295 0 0 1 3.046 1.26 4.312 4.312 0 0 1 1.259 3.045v6.995Z" fill="#60D284")
                path(d="M13.093 4.885h-3.41v3.276h3.41V4.885ZM17.647 4.885h-3.409v3.276h3.41V4.885ZM22.345 4.885h-3.41v3.276h3.41V4.885Z" fill="#fff")
                path(d="M14.89 22.801h11.16M41.752 22.801h17.666M30.684 22.801h6.212M14.797 27.544h26.505M14.797 32.254h26.505M45.877 27.544h9.454M59.477 27.544h14.498M14.89 39.355h11.16M41.752 39.355h17.666M30.684 39.355h6.212M14.766 44.098h31.29M14.797 48.806h26.505M50.59 44.098h4.726M59.477 44.098h14.498M80.361 60.51h11.16M116.09 60.51h8.332M96.086 60.51h15.37M80.234 65.253h26.505M80.166 69.961h34.299M110.865 65.253h9.454M124.639 65.253h14.498M80.361 77.061h11.16M106.756 77.061h17.666M96.162 77.061h6.212M80.297 81.804h19.027M80.234 86.514h26.505M103.811 81.804h16.511M124.639 81.804h14.498" stroke="#222" stroke-miterlimit="10" stroke-linecap="round")
                path(d="M139.136 20.396H79.574v30.81h59.562v-30.81Z" fill="#222")
                path(d="M74.119 58.061H14.557v30.81h59.562v-30.81Z" fill="#60D284")
</template>

<script setup lang="ts">
import AppIcon from './UI/AppIcon.vue';

const text = "Securely connect to your private network on any device with our easy to-use apps. Twingate feels like magic because it quietly."
</script>