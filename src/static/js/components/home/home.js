import Header from "../header/header.js"

export default {
    name: 'Home',
    data: function () {
        return {
            technologies : [
                {
                    title : "GOLANG",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    title : "NODEJS",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
                {
                    title : "PYTHON",
                    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                },
            ]
        }
    },
    components: {
        "page-header" : Header,
    },
    template: `
    <main>
        <page-header>
            <div class='container'>
                <h1 class='header-title home-header-title'>DESIGN.</h1>
                <h1 class='header-title home-header-title'>DEVELOPE.</h1>
                <h1 class='header-title home-header-title'>CREATE.</h1>
                <h3 class="home-tag-line">A FULL STACK DEVELOPER THAT SOLVES PROBLEMS AND UNDERSTANDS PEOPLE.</h3>
                <button class="home-call-to-action" @click="$router.push('/contact')">CONTACT</button>
                <div style="text-align:center">
                    <i id="home-header-arrow" class='fas fa-chevron-down'></i>
                </div>
            </div>
        </page-header>
        <section class='home-section' v-for="tech in technologies">
            <div class='background-cover'></div>
            <div class='container'>
                <h3>{{tech.title}}</h3>
                <button>VIEW EXPERIENCE</button>
                <p>{{tech.description}}</p>
            </div>
        </section>
    </main>
    `,
};