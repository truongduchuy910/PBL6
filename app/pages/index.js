import SignIn from "./SignIn";
import Home from "./Home";
import User from "./User";
import Post from "./Post";
import SignUp from "./SignUp";
import NewPost from "./NewPost";

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
    { name: "signup", component: SignUp, options: { title: "Đăng ký" } },
    {
      name: "newpost",
      component: NewPost,
      options: { title: "Tạo bài viết mới" },
    },
  ],
  linking: {
    config: {
      screens: {
        home: "/",
        user: "user",
        post: "post",
        signup: "signup",
        newpost: "newpost",
      },
    },
  },
};
