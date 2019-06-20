import Nav from "../nav/nav.js"
import Footer from "../footer/footer.js"

export default {
    name: 'App',
    data: function() {
        return {
            links : [
                {link: "/", label: "Home"},
                {link: "/", label: "Experience"},
                {link: "/contact", label: "Contact"},
                {link: "/", label: "Blog"},
            ],
        }
    },
    components: {
        "top-nav" : Nav,
        "foot" : Footer,
    },
    template: `
        <div>
            <top-nav :links="links">
            </top-nav>
            <router-view></router-view>
            <foot>
            </foot>
        </div>
    `,
};