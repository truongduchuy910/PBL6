const { gql } = require("@apollo/client");
async function beforeDelete(context, existingItem, operation, listKey, fieldPath) {
  const { id } = existingItem;
  //const context = itoa.createContext({ skipAccessControl: true });
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
}
async function afterCreate(context, resolvedData, listKey, fieldKey, operation, inputData, item, originalInput, updatedItem, fieldPath) {
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


