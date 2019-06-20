import Home from "../components/home/home.js"
import Contact from "../components/contact/contact.js"

const routes = [
    { 
        path: '/',
        component: Home
    },
    { 
        path: '/experience',
        component: Home
    },
    { 
        path: '/contact',
        component: Contact
    },
    { 
        path: '/blog',
        component: Home
    },
]

export default new VueRouter({
    mode: 'history',
    routes
})