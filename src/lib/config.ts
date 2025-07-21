
import type { NavItem } from "$lib/types/nav";

import type { SiteConfig } from "./types/config";


export const siteConfig: SiteConfig = {
    version: '0.1.14',
    title: 'Snippet Curator',
    description:
        'Organize and re-discover your internet saves.',
    github: '',
    npm: '',

    quickLinks: [],
    logo: '/logo.svg',
    logoDark: '/logo-white.svg',
    favicon: '/favicon.png',
};


export let navItems: NavItem[] = [
    {
        title: 'Docs',
        href: '/docs'
    },

];
