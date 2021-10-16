import React from "react";
import { gql, useQuery } from "@apollo/client";
import { POST_LIST } from "../List/Controller";
export const POST_ITEM = gql`
  query($id: ID!) {
    Post(where: { id: $id }) {
      id
      content
      tags {
        content
      }
      images {
        file {
          publicUrl
        }
      }
      interactive {
        comments {
          content
        }
        reactions {
          emoji
        }
      }
      createdAt
      createdBy {
        id
        name
        avatar {
          publicUrl
        }
      }
    }
  }
`;
export default function PostItem({ UI, id, where }) {
  const { loading, error, data = {} } = useQuery(id ? POST_ITEM : POST_LIST, {
    variables: id ? { id } : { where },
  });

  const { allPosts, Post } = data;
  const [post] = allPosts || [Post];
  return <UI loading={loading} error={error} post={post} />;
}
