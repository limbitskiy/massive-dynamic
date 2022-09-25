import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSiteStore = defineStore('SiteStore', () => {
    const navLinks = ref([
        {
            id: 0,
            text: 'Home',
            href: '/'
        },
        {
            id: 1,
            text: 'Pricing',
            href: '/pricing'
        },
        {
            id: 2,
            text: 'Support',
            href: '/support'
        },
    ])

    const socialIcons = ref([
            {
                id: 0,
                type: 'viber',
                link: 'www.viber.com',
                size: ["25px", "25px"],
                color: "grey"
            },
            {
                id: 1,
                type: 'telegram',
                link: 'www.tele.com',
                size: ["25px", "25px"],
                color: "grey"
            },
            {
                id: 2,
                type: 'instagram',
                link: 'www.insta.com',
                size: ["25px", "25px"],
                color: "grey"
            },
    ])

return { navLinks, socialIcons }
})
