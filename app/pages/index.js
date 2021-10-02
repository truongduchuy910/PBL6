import SignIn from "./SignIn";
import Home from "./Home";
import User from "./User";
import Post from "./Post";
export default {
  initialRouteName: "post",
  screens: [
    {
      name: "sign-in",
      component: SignIn,
      options: { title: "Đăng nhập" },
    },
    { name: "home", component: Home, options: { title: "Trang chủ" } },
    { name: "user", component: User, options: { title: "Trang cá nhân" } },
    { name: "post", component: Post, options: { title: "Trang bài viết" } },
  ],
};
