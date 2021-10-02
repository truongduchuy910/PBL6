import SignIn from "./SignIn";
import Home from "./Home";
// export default {
//   initialRouteName: "home",
//   screens: [
//     {
//       name: "sign-in",
//       component: SignIn,
//       options: { title: "Đăng nhập" },
//     },
//     { name: "home", component: Home, options: { title: "Trang chủ" } },
//   ],
// };
export default function Home() {
  return (
    <main>
      <UserAuthShort />
      <UserSignOutButton />
      </main>
  );
}
