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
AppSection(color="#121315")
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

AppSection(color="#121315")
    TextBlock.text-center.my-16(titleColor="#fff" title="How our software works") Best developer experience with an obsessive focus on end-user performance.

    AppFixedImg

AppSection(color="#fff")
    TextBlock.text-center.my-16(width="60%" title="Cloud based tool that helps teams design mobile apps" titleColor="#121315")

    .pill.bg-md-accent.rounded-3xl.py-14.w-full.flex.justify-center
        AppIcon(name="webApp" width="500" height="500" )

    p.text-center.text-3xl.text-md-black.font-medium.my-16 All your interactions with a customer are shown on a single timeline. You have one relationship with the customer.

AppSection(color="#121315")
    .split.text-center(class="xl:flex xl:flex-row-reverse")
        AppIcon(name="webApp" width="auto" height="600")
        .flex.items-center.p-16
            TextBlock(beforeTitle="Timeline" title="Everything in one place" titleColor="#fff") View all your messages without hunting through tickets or multiple threads. You have one relationship with the customer — and now you have a way to see it.
                template(#button)
                    div.mt-8
                        AppButton(type="primary" action="www.google.com") See All Features

    .split.text-center.mt-4(class="xl:flex")
        AppIcon(name="webApp" width="auto" height="600")
        .flex.items-center.p-16
            TextBlock(beforeTitle="Queues" title="Manage your workload" titleColor="#fff") Stay on top of your and your team’s workload with Queues. Instantly see who needs help, who’s being looked after and who needs a follow up.
                template(#button)
                    div.mt-8
                        AppButton(type="primary" action="www.google.com") See All Features
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