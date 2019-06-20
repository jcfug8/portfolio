import App from './components/app/app.js';
import Router from "./router/router.js";
import Store from "./store/store.js";


new Vue({
    store : Store,
    router : Router,
    render: h => h(App),
}).$mount(`#app`);