import UserSignOut from "./Controller";
import { Button } from "native-base";
function UI({ loading, error, signOut }) {
  /**
   *
   * @param {Event} e
   */
  const clickSignOut = (e) => {
    signOut();
  };
  return (
    <Button onPress={clickSignOut} onClick={clickSignOut}>
      Sign-out?
    </Button>
  );
}
export default function UserSignOutButton() {
  return <UserSignOut UI={UI} />;
}
