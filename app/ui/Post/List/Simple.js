import React from "react";
import { VStack } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostItemSkeletonSimple from "./SkeletonSimple";
import PostListController from "./Controller";

function UI(loading, error, allPosts, _allPostsMeta) {
  if (loading) {
    return <PostItemSkeletonSimple />;
  }

  return (
    <VStack>
      {/* Map list posts */}
      {allPosts.map((post) => (
        <PostItemSimple id={post.id} />
      ))}
    </VStack>
  );
}
export default function PostListSimple(props) {
  return <PostListController {...props} UI={UI} />;

}
