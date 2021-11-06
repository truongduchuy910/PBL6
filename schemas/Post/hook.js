const { gql } = require("@apollo/client");
async function beforeDelete(context, existingItem, operation, listKey, fieldPath) {
  console.log(existingItem)
  const { id } = existingItem;
  //const context = keystone.createContext({ skipAccessControl: true });
  const {
    data: { Post },
    errors: postError = [],
  } = await context.executeGraphQL({
    context,
    query: gql`
      query($id: ID!) {
        Post(where: { id: $id }) {
          interactive {
            id
          }
        }
      }      
    `,
    variables: { id },
    skipAccessControl: true,
  });
  if (postError && postError.length) {
    postError.map((error) => {
      console.log(error);
    });
  }
  var interactiveId = Post.interactive.id
  const {
    data: { deleteInteractive },
    errors = [],
  } = await context.executeGraphQL({
    context,
    query: gql`
      mutation($interactiveId: ID!) {
        deleteInteractive(id: $interactiveId) {
          comments {
            id
          }
          reactions {
            id
          }
        }
      }     
    `,
    variables: { interactiveId },
    skipAccessControl: true,
  });
  if (errors && errors.length) {
    errors.map((error) => {
      console.log(error);
    });
  }
  // var comments = []
  // var reactions = []
  // comments = deleteInteractive.comments
  // console.log(comments)
  // reactions = deleteInteractive.reactions
  // console.log(reactions)
  // for (var comment in comments) {
  //   var commentId = comment.id
  //   const {
  //     data,
  //     errors = [],
  //   } = await keystone.executeGraphQL({
  //     context,
  //     query: gql`
  //       mutation($commentId: ID!) {
  //         deleteInteractiveComment(id: $commentId) {
  //           id
  //         }
  //       }  
  //     `,
  //     variables: { commentId },
  //     skipAccessControl: true,
  //   });
  //   if (errors && errors.length) {
  //     errors.map((error) => {
  //       console.log(error);
  //     });
  //   }
  // }
  // for (var reaction in reactions) {
  //   var reactionId = reaction.id
  //   const {
  //     data,
  //     errors = [],
  //   } = await keystone.executeGraphQL({
  //     context,
  //     query: gql`
  //       mutation($reactionId: ID!) {
  //         deleteInteractiveReaction(id: $reactionId) {
  //           id
  //         }
  //       } 
  //     `,
  //     variables: { reactionId },
  //     skipAccessControl: true,
  //   });
  //   if (errors && errors.length) {
  //     errors.map((error) => {
  //       console.log(error);
  //     });
  //   }
  // }
}
async function afterCreate(context, resolvedData, listKey, fieldKey, operation, inputData, item, originalInput, updatedItem, fieldPath) {
  //const context = keystone.createContext({ skipAccessControl: true });
  console.log("resolvedData", resolvedData)
  console.log("listKey", listKey)
  console.log("fieldKey", fieldKey)
  console.log("operation", operation)
  console.log("inputData", inputData)
  console.log("item", item)
  console.log("originalInput", originalInput)
  console.log("updatedItem", updatedItem)
  console.log("fieldPath", fieldPath)
  if (operation === 'update') return;
  const { id } = fieldPath;
  const id_post = id;
  const {
    //data: { createInteractive },
    data = {},
    errors: createInteractiveError = [],
  } = await context.executeGraphQL({
    context,
    query: gql`
      mutation {
          createInteractive(data: { comments: null, reactions: null }) {
            id
          }
      }
      `,
    //variables: { id },
    skipAccessControl: true,
  });
  const { createInteractive } = data
  if (createInteractiveError && createInteractiveError.length) {
    createInteractiveError.map((error) => {
      console.log(error);
    });
  }
  console.log(createInteractive)
  const id_interactive = createInteractive.id
  const {
    //data: { },
    errors: updatePostError = [],
  } = await context.executeGraphQL({
    context,
    query: gql`
      mutation($id_post: ID!, $id_interactive: ID!) {
        updatePost(
          id: $id_post
          data: { interactive: { connect: { id: $id_interactive } } }
        ) {
          id
          interactive {
            id
          }
        }
      }
      `,
    variables: { id_post, id_interactive },
    skipAccessControl: true,
  });
  if (updatePostError && updatePostError.length) {
    updatePostError.map((error) => {
      console.log(error);
    });
  }
}
module.exports.content = {
  //beforeChange: contentBeforeChange,
  beforeDelete: ({ context, existingItem, operation, listKey, fieldPath }) => { beforeDelete(context, existingItem, operation, listKey, fieldPath) },
  afterChange: ({ context, resolvedData, listKey, fieldKey, operation, inputData, item, originalItem, originalInput, updatedItem, fieldPath }) => { afterCreate(context, resolvedData, listKey, fieldKey, operation, inputData, item, originalItem, originalInput, updatedItem, fieldPath) }
};


