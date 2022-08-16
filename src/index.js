import Alpine from 'alpinejs';
import icons from './images/icons.svg?raw';

window.Alpine = Alpine

Alpine.data('site', () => ({
    activeTab: 1,
    credId: 1,
    icons: icons,
    filterProject: 'all',
    projects: [
        {
            id: 1,
            name: 'RuffleButts',
            url: 'https://rufflebutts.com',
            screenshot: 'rufflebutts.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'migration', 'build', 'full-featured', 'optimized']
        },
        {
            id: 2,
            name: 'Rogers & Hollands',
            url: 'https://rogersandhollands.com',
            screenshot: 'rogers.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 3,
            name: 'Theraderm',
            url: 'https://theraderm.com',
            screenshot: 'theraderm.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 4,
            name: 'Proline Range Hoods',
            url: 'https://prolinerangehoods.com',
            screenshot: 'proline.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'redesign', 'full-featured']
        },
        {
            id: 5,
            name: 'Perfection Learning',
            url: 'https://perfectionlearning.com',
            screenshot: 'perfection-learning.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 6,
            name: 'Gabriels Ross',
            url: 'https://grshop.com/',
            screenshot: 'gabrielross.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 7,
            name: 'NightOwl',
            url: 'https://nightowlsp.com',
            screenshot: 'nightowl.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 8,
            name: 'THK',
            url: 'https://thkstore.com',
            screenshot: 'thk.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 9,
            name: 'RocketWeb.com',
            url: 'https://rocketweb.com',
            screenshot: 'rocketweb.webp',
            role: 'FED lead',
            commercial: true,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 10,
            name: 'RW Prime theme',
            url: 'https://prime.demo.rocketweb.com',
            screenshot: 'prime-theme.webp',
            role: 'FED lead',
            commercial: false,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 11,
            name: 'Prime UI docs',
            url: 'https://primeui.rocketweb.com/',
            screenshot: 'prime-ui.webp',
            role: 'FED lead',
            commercial: false,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 12,
            name: 'RW Storefront (React)',
            url: '',
            screenshot: 'rw-storefront.webp',
            role: 'FED lead',
            commercial: false,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 13,
            name: 'Magento2 gulpfile',
            url: 'https://github.com/rocketweb-fed/magento2-gulpfile',
            screenshot: 'm2-gulpfile.webp',
            role: 'FED lead',
            commercial: false,
            tags: ['Magento2', 'redesign']
        },
        {
            id: 14,
            name: 'Alpine Tailwind starter',
            url: 'https://github.com/jkulig/alpine-tailwind-vite',
            screenshot: 'alpine-tailwind.webp',
            role: 'FED lead',
            commercial: false,
            tags: ['Magento2', 'redesign']
        }
    ], 
    skills: {
        hard: { 
            HTML: ['HTML5', 'semantics', 'accessibility'],
            JS: ['ES6', 'Svelte', 'React', 'Vue', 'Alpine', 'Knockout', 'requirejs'],
            CSS: ['CSS3', 'LESS', 'SASS', 'Tailwind', 'Styled Components'],
            backend: ['PHP', 'MySQL', 'Node', 'GraphQL', 'API', 'JSON'],
            tooling: ['CLI', 'Git', 'Gulp', 'Jest', 'Webpack', 'Vite', 'Figma', 'InVision', 'Jira', 'Slack']
        },
        soft: {
            communication: ['social skills', 'verbal', 'nonverbal', 'writing skills'],
            critical: ['adaptability', 'creativity', 'critical thinking', 'desire to learn', 'problem solving'],
            // leadership: ['delegation', 'giving clear feedback', 'inspiring', 'mentoring', 'facilitation', 'enthusiasm'],
            teamwork: ['collaboration', 'emotional intelligence', 'empathy', 'selling skills'],
            'work ethics': ['meeting deadlines', 'attentiveness', 'dependability', 'motivation', 'time management', 'working well under pressure']
        }
    },
    creds: [
        {
            id: 1,
            name: 'Muiree Hartnett',
            role: 'Owner, John Hartnett & Co',
            content: "Jakub has been extremely easy to deal with, and has completed my project in an efficient manner, and under-budget. He has followed my instructions as well as providing ideas to improve the website. I wouldn't hesitate in recommending Jakub for any project in the future"
        },
        {
            id: 2,
            name: 'Anne French',
            role: 'Owner, The Pigeon House Studios',
            content: "I found Jakub to be thoroughly professional, affordable and extremely generous with his time and expertise. Also I believe the after care service for any web based activity is extremely important and Jakub has been second to none in this regard, as he has responded to all my queries and emails without any delay and nothing has been a problem."
        },
        {
            id: 3,
            name: 'Catalin Preda',
            role: 'Senior Front-end dev, Darwin Design LLC',
            content: "Jakub is one of those developers who can hear the first sentence and then finish the story. Jakub doesn't need too many details. He fares naturally against problems because he had thought of it before you asked and has the solution & its details inside his head. I don't remember noticing a bug in Jakub's work. I've seen Jakub grow naturally in a matter of years from an easy-going & collaborative developer to a Magento tech lead. I loved working with Jakub because he is empathic, he is fair, he has solid work ethics, he doesn't sit on problems and he is a closer."
        },
        {   
            id: 4,
            name: 'Deborah Maguire',
            role: 'Owner, Irish Made Gifts',
            content: "Jakub was totally responsible for getting our website off the ground. This included listening to our own creative ideas and sales objectives and then designing our site around them. The finished result is both visually pleasing and commercially viable because we respected Jakubs advice.If you have no idea about websites, Jakub can sort you out. If you have IT knowledge but lack creativity then Jakub can still sort you out! When your site is finished and the dust settles, Jakub will be there for the after sales service."
        }
    ],

    init() {
        this.initializeTabs();
    },

    initializeTabs() {
        this.highlightSelectedTab(1);
    },

    isActive(tab) {
        return this.activeTab === parseInt(tab);
    },

    activateTab(tab) {
        this.highlightSelectedTab(tab);

        this.activeTab = tab;
    },

    highlightSelectedTab(tab) {
        const active = document.getElementById('active');
        const targetTab = document.getElementById('tab-' + tab);
        const targetTabWidth = targetTab.offsetWidth;
        const targetTabHeight = targetTab.offsetHeight;
        const targetTabXPos = targetTab.offsetLeft; 
        
        active.style.width = targetTabWidth + "px";
        active.style.height = targetTabHeight + "px";
        active.style.left = targetTabXPos + "px";
    },

    isProjectVisible(project) {
        if (project.commercial) {
            if (this.filterProject === 'open-source') {
                return false;
            }
        } else {
            if (this.filterProject === 'commercial') {
                return false
            }
        }

        return true;
    },

    isCredVisible(cred) {
        return this.credId === cred.id;
    },

    getSmallImage(id) {
        const imageDirectory = '/screenshots/small/optimized';
        const project = this.projects.filter(
            p => p.id === id 
        )[0];
        const image = project.screenshot;

        return `${imageDirectory}/${image}`;
    }


}));

Alpine.start()

