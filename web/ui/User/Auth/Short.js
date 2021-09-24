import UserAuth from "@itoa/controllers/User/Auth";
function UI({ loading, error, authenticatedUser }) {
  if (loading) return "...";
  if (error) return JSON.stringify(error);
  return !authenticatedUser ? "Sign in?" : authenticatedUser.name || "---";
}
export default function UserAuthShort() {
  return <UserAuth UI={UI} />;
}
