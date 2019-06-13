// import App from './js/components/app.js';

let App = {
    name: 'App',
    template: `
        <div class="container mx-auto p-4">
            <h1>Hello World</h1>
        </div>
    `,
};

new Vue({
    render: h => h(App),
}).$mount(`#app`);