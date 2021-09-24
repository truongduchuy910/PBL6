import { Fragment } from "react";
import UserSignInSimple from "../SignIn/Simple";
import UserSignOutButton from "@itoa/web-ui/User/SignOut/Button";
import UserAuth from "./";
function UI({ loading, error, user }) {
  if (loading) return "...";
  if (error) return JSON.stringify(error);
  return !user ? (
    <UserSignInSimple />
  ) : (
    <Fragment>
      {user.name}
      <UserSignOutButton />
    </Fragment>
  );
}
export default function UserAuthShort() {
  return <UserAuth UI={UI} />;
}
