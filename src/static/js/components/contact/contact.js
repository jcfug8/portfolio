import Header from "../header/header.js"


export default {
    name: 'Contact',
    components : {
        "page-header" : Header
    },
    template: `
        <main>
            <page-header>
                <div class='container'>
                    <h3 class='header-title'>Contact</h3>
                </div>
            </page-header>
            <section id='contactForm'>
                <div class='background-cover'></div>
                <div class='container'>
                    <h4>HOW CAN I HELP?</h4>
                    <input placeholder="Name"/>
                    <input placeholder="Email"/>
                    <input placeholder="Contact Number"/>
                    <input placeholder="Subject"/>
                    <textarea placeholder="Message"></textarea>
                    <button>SEND</button>
                </div>
            </section>
        </main>
    `,
};