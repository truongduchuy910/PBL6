import { Fragment } from "react";
import UserSignInSimple from "../SignIn/Simple";
import UserSignOutButton from "../SignOut/Button";
import UserAuth from "./Controller";

function UI({ loading, error, user }) {
  if (loading) return "...";
  return !user ? (
    <Fragment>
      <UserSignInSimple />
    </Fragment>
  ) : (
    <Fragment>
      <UserSignOutButton />
    </Fragment>
  );
}
export default function UserAuthShort() {
  return <UserAuth UI={UI} />;
}
