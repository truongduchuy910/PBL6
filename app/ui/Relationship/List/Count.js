import Controller from "./Controller";
function UI({ count }) {
  return count;
}
export default function RelationshipListCount(props) {
  return <Controller {...props} UI={UI} />;
}
