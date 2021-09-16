import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import router from "./router/index";
import getPageTitle from "./utils/get_page_title.js";
NProgress.configure({ showSpinner: false }); // NProgress Configuration
const whiteList = ["/login"]; // no redirect whitelist
const token = localStorage.getItem("token");
router.beforeEach((to, from, next) => {
  // start progress bar
  NProgress.start();
  // set page title
  document.title = getPageTitle(to.meta.title);

  if (token) {
    if (to.path === "/login") {
      NProgress.done();
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next();
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});
