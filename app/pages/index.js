import SignIn from "./SignIn";
import Home from "./Home";
import User from "./User";
import Post from "./Post";

export default {
  initialRouteName: "home",
  auth: { component: SignIn, requires: ["home"] },
  screens: [
    {
      name: "home",
      component: Home,
      options: { title: "Trang chủ" },
    },
    { name: "user", component: User, options: { title: "Trang cá nhân" } },
    { name: "post", component: Post, options: { title: "Trang bài viết" } },
  ],
  linking: {
    config: {
      screens: {
        home: "/",
        user: "user",
        post: "post",
      },
    },
  },
};
