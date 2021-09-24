import UserSignOut from "./";
function UI({ loading, error, signOut }) {
  /**
   *
   * @param {Event} e
   */
  const clickSignOut = (e) => {
    signOut();
  };
  return <button onClick={clickSignOut}>Sign-out?</button>;
}
export default function UserSignOutButton() {
  return <UserSignOut UI={UI} />;
}
