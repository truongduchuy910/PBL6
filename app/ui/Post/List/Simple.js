import React from "react";
import { VStack } from "native-base";
import PostItemSimple from "../Item/Simple";
import PostItemSkeletonSimple from "./SkeletonSimple";
import PostListController from "./Controller";

function UI(loading, error, allPosts) {
  if (loading) {
    return <PostItemSkeletonSimple />;
  }

  return (
    <VStack>
      {/* Map list posts */}
      {allPosts.map((post) => (
        <PostItemSimple post={post} />
      ))}
    </VStack>
  );
}
export default function PostListSimple(){
  return <PostListController UI={UI} />
}
