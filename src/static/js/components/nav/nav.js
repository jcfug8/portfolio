export default {
    name: 'Nav',
    data: function() {
        return {
            mobileOpen: false,
        }
    },
    props: [
        'links',
    ],
    methods: {
        toggleNav: function() {
            if (this.mobileOpen) {
                this.mobileOpen = false;
            } else {
                this.mobileOpen = true;
            }
        }
    },
    template: `
    <div id="navigation-container">
        <div @click="toggleNav" id="mobile-navigation-toggle" class="container">
            <i class="fas fa-bars"></i>
        </div>
        <div v-if='mobileOpen' @click="toggleNav" id='mobile-nav-cover'></div>
        <nav v-if='mobileOpen' id='mobile-navigation'>
            <router-link :key="i" v-for="(link, i) in links" :to="link.link">{{link.label}}</router-link>
        </nav>
        <nav id='navigation' class="container">
            <router-link :key="i" v-for="(link, i) in links" :to="link.link">{{link.label}}</router-link>
        </nav>
    </div>
    `,
};