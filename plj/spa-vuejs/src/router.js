import Vue from 'vue';
import Router from 'vue-router';
// import Home from './Vues/Home.vue';
// import Users from './Vues/Users.vue'
// import Posts from './Vues/UsersPosts.vue'
// import Profiles from './Vues/UsersProfiles.vue'
// import HeaderHome from './Vues/HeaderHome.vue';
// import HeaderUsers from './Vues/HeaderUsers.vue';
const Home = () => import(/* webpackChunkName: "Home"*/'./Vues/Home.vue');
const Users = () => import(/* webpackChunkName: "Users"*/'./Vues/Users.vue');
const Posts = () => import(/* webpackChunkName: "Users"*/'./Vues/UsersPosts.vue');
const Profiles = () => import(/* webpackChunkName: "Users"*/'./Vues/UsersProfiles.vue');
const HeaderHome = () => import(/* webpackChunkName: "Home"*/'./Vues/HeaderHome.vue');
const HeaderUsers = () => import(/* webpackChunkName: "Users"*/'./Vues/HeaderUsers.vue');

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{path: '/',components: {default: Home, header: HeaderHome}}, 
    {path: '/users/:id', 
    components: {default: Users, header: HeaderUsers}, 
    props: {default : true, header: false}, 
    children: [
        {path: "post", component:Posts}, 
        {path: "profile", component: Profiles, name: "users-id-profile"}]
    },
    {
        path: '*',
        redirect: '/'
    }],
    scrollBehavior(to, from, savedPosition) {
        return new Promise(resolve => {
            this.app.$root.$once('triggerScroll', () => {
                let position = {x:0, y: 0};
                if(savedPosition) {
                    position = savedPosition;
                }
                if(to.hash){
                    position = {
                        selector: to.hash
                    };
                }
            resolve(position)
            });
        });
    }
})