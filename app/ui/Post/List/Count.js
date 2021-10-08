import Controller from "./Controller";
function UI({ count }) {
  return count;
}
export default function PostListCount(props) {
  return <Controller {...props} UI={UI} />;
}
