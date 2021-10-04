import SignIn from "./SignIn";
import Home from "./Home";
import User from "./User";
import Post from "./Post";
import SignUp from "./SignUp";
import NewPost from "./NewPost";
import FriendSuggestion from "./FriendSuggestion";
import FriendRequest from "./FriendRequest";
import UserUpdate from "./UserUpdate";

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
    {
      name: "userupdate",
      component: UserUpdate,
      options: { title: "Chỉnh sửa trang cá nhân" },
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
        userupdate: "userupdate",
      },
    },
  },
};

/*
Các trang:
Trang đăng nhập                 /login                Form đăng nhập
Trang đăng ký                   /signup               Form đăng ký
Trang chủ                       /                     Nút thêm bài viết, newfeed của tài khoản, gợi ý bạn bè fixed bên phải
Trang thêm bài viết             /newpost              Form thêm bài viết
Trang bài viết đơn              /[postID]             Hiển thị duy nhất 1 bài viết
Trang cá nhân                   /[userID]             Hiển thị thông tin cá nhân, có hiện quan hệ bạn bè
Trang bạn bè                    /[userID]/friends     Hiển thị toàn bộ bạn bè của user
Trang gợi ý bạn bè              /friendsuggestion     Hiển thị danh sách bạn bè gợi ý
Trang lời mời kết bạn           /friendrequest        Hiển thị danh sách lời mời kết bạn
Trang chỉnh sửa trang cá nhân   /userupdate           Form đổi thông tin cá nhân và form đổi mật khẩu
*/
