import UserSignIn from "./Controller";

function UI({ signIn, loading, error, user }) {
  /**
   *
   * @param {Event} e
   */
  const submitSignIn = (e) => {
    e.preventDefault();
    const phone = e.target.phone?.value;
    const password = e.target.password?.value;
    if (!loading) signIn({ phone, password });
  };
  if (loading) return "loading...";
  return (
    <form onSubmit={submitSignIn}>
      <input placeholder="phone" name="phone" />
      <input placeholder="password" type="password" name="password" />
      <button type="submit">Sign In</button>
      {error && "sai mat khau"}
    </form>
  );
}
export default function UserSignInSimple() {
  return <UserSignIn UI={UI} />;
}
