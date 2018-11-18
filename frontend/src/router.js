import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import SignUp from "./views/SignUp.vue";
import SignIn from "./views/SignIn.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requireAuth: true }
    },
    {
      path: "/signup",
      component: SignUp
    },
    {
      path: "/signin",
      component: SignIn,
      meta: { isSignIn: true }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  // 認証付き画面制御
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem("jwt")) {
      next();
    } else {
      next({
        path: "/signin",
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }

  // サインイン済みの場合にサインイン画面にアクセスさせない
  if (to.matched.some(record => record.meta.isSignIn)) {
    if (localStorage.getItem("jwt")) {
      next({
        path: "/"
      });
    } else {
      next();
    }
  }

  // メニュークローズ
  if (router.app.$store && router.app.$store.state.isMenuActive) {
    router.app.$store.dispatch("toggleMenu", {
      isActive: false
    });
  }
});

export default router;
