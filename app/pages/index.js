import SignIn from "./SignIn";
import Home from "./Home";
import User from "./User";
import Post from "./Post";
import SignUp from "./SignUp";
import NewPost from "./NewPost";
import FriendSuggestion from "./FriendSuggestion";
import FriendRequest from "./FriendRequest";

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
    {
      name: "friendsuggestion",
      component: FriendSuggestion,
      options: { title: "Bạn bè gợi ý" },
    },
    {
      name: "friendrequest",
      component: FriendRequest,
      options: { title: "Lời mời kết bạn" },
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
        friendsuggestion: "friendsuggestion",
        friendrequest: "friendrequest",
      },
    },
  },
};
