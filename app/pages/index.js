import SignIn from "./SignIn";
import Home from "./Home";
export default {
  initialRouteName: "sign-in",
  screens: [
    {
      name: "sign-in",
      component: SignIn,
      options: { title: "Đăng nhập" },
    },
    { name: "home", component: Home, options: { title: "Trang chủ" } },
  ],
};
