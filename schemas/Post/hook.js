const { gql } = require("@apollo/client");
// async function contentBeforeChange({ existingItem, resolvedData, context }) {
//   const { content, title = "" } = resolvedData || existingItem;
//   if (!content) return;
//   var str = `${content} ${title} ${title}`;
//   str = str
//     .replace(/(?:__|[*#])|\[(.*?)\]\(.*?\)/gm, "")
//     .replace(/#|!|@|$|%|^|&|_|\[|]|\?|\.|,/g, " ")
//     .replace(/\n/g, " ")
//     .replace(/\s+/g, " ")
//     .toLocaleLowerCase()
//     .trim();
//   resolvedData.description = str.slice(0, 180);
// }
async function beforeDelete(context, existingItem, operation, listKey, fieldPath) {
  console.log('existingItem', existingItem)
  console.log('operation', operation)
  console.log('listKey', listKey)
  console.log('fieldPath', fieldPath)
  console.log(existingItem)
  const { id } = existingItem;
  console.log(existingItem)
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
  var comments = []
  var reactions = []
  comments = deleteInteractive.comments
  reactions = deleteInteractive.reactions
  for (var comment in comments) {
    var commentId = comment.id
    const {
      data,
      errors = [],
    } = await keystone.executeGraphQL({
      context,
      query: gql`
        mutation($commentId: ID!) {
          deleteInteractiveComment(id: $commentId) {
            id
          }
        }  
      `,
      variables: { commentId },
      skipAccessControl: true,
    });
    if (errors && errors.length) {
      errors.map((error) => {
        console.log(error);
      });
    }
  }
  for (var reaction in reactions) {
    var reactionId = reaction.id
    const {
      data,
      errors = [],
    } = await keystone.executeGraphQL({
      context,
      query: gql`
        mutation($reactionId: ID!) {
          deleteInteractiveReaction(id: $reactionId) {
            id
          }
        } 
      `,
      variables: { reactionId },
      skipAccessControl: true,
    });
    if (errors && errors.length) {
      errors.map((error) => {
        console.log(error);
      });
    }
  }
}
module.exports.content = {
  //beforeChange: contentBeforeChange,
  beforeDelete: ({ context, existingItem, operation, listKey, fieldPath }) => { beforeDelete(context, existingItem, operation, listKey, fieldPath) }
};


