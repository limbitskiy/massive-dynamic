<template lang="pug">
//- AppButton(type="primary" action="www.google.com") Hello
//- AppIcon(name="shapes" width="30" height="30" fill="green")
//- AppLink(href="www.google.com")
//-     AppIcon(name="keyboard" width="30" height="30" fill="orange")
//- SocialIcons(:items="socialIcons.items" :gap="socialIcons.gap")
//- TextBlock(beforeTitle="Timeline" title="Manage your workload") Stay on top of your and your team’s workload with Queues. Instantly see who needs help, who’s being looked after and who needs a follow up.
//-     template(#button)
//-         div.mt-8
//-             AppButton(type="primary" action="www.google.com") See All Features
//- IconItem(icon="keyboard" title="Startups" text="You’ve just launched your project.")
AppNavbar(:navLinks="navLinks")
    template(#logo)
        AppLogo(width="80" height="80" color="grey")
    template(#links)
        AppLink.text-xl(v-for="link in navLinks" :key="link" :href="link.href") {{ link.text }}
    template(#button)
        AppButton(type="primary" action="www.google.com") 
            .text-xl Get Started

AppPill(corners="hero" padding="noPadding")
    AppHero

TextBlock.text-center.my-20(title="How our software works") Best developer experience with an obsessive focus on end-user performance.

AppFixedImg
</template>

<script setup lang="ts">
import { useSiteStore } from './stores/SiteStore';
import SocialIcons from './components/SocialIcons.vue';
import IconItem from './components/IconItem.vue';
import AppNavbar from './components/AppNavbar.vue';
import AppHero from './components/AppHero.vue';
import AppFixedImg from './components/AppFixedImg.vue';

const socialIcons = {
    gap: 2,
    items: [
        {
            id: 0,
            type: 'viber',
            link: 'www.viber.com',
            size: [30, 30],
            color: "orange"
        },
        {
            id: 1,
            type: 'telegram',
            link: 'www.tele.com',
            size: [30, 30],
            color: "green"
        },
        {
            id: 2,
            type: 'instagram',
            link: 'www.insta.com',
            size: [30, 30],
            color: "red"
        },
    ]
}

const navLinks = [
    {
        text: 'Features',
        href: '/features'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
    {
        text: 'Download',
        href: '/download'
    },
    {
        text: 'Support',
        href: '/support'
    },
]

const store = useSiteStore();
</script>