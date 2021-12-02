const { gql } = require("@apollo/client");
async function afterCreate(context, resolvedData, listKey, fieldKey, operation, inputData, item, originalInput, updatedItem, fieldPath) {
    //const context = keystone.createContext({ skipAccessControl: true });
    if (operation === 'update') return;
    const { id } = fieldPath;
    const id_comment = id;
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
        errors: updateInteractiveCommentError = [],
    } = await context.executeGraphQL({
        context,
        query: gql`
        mutation($id_comment: ID!, $id_interactive: ID!) {
            updateInteractiveComment(
              id: $id_comment
              data: { my_interactive: { connect: { id: $id_interactive } } }
            ) {
              id
              my_interactive {
                id
              }
            }
          }
        `,
        variables: { id_comment, id_interactive },
        skipAccessControl: true,
    });
    if (updateInteractiveCommentError && updateInteractiveCommentError.length) {
        updateInteractiveCommentError.map((error) => {
            console.log(error);
        });
    }
}
async function beforeDelete(context, existingItem, operation, listKey, fieldPath) {
    const { id } = existingItem;
    //const context = itoa.createContext({ skipAccessControl: true });
    const {
        data = {},
        errors: commentError = [],
    } = await context.executeGraphQL({
        context,
        query: gql`
            query($id: ID!) {
                InteractiveComment(where: { id: $id }) {
                my_interactive {
                    id
                }
                }
            }     
        `,
        variables: { id },
        skipAccessControl: true,
    });
    if (commentError && commentError.length) {
        commentError.map((error) => {
            console.log(error);
        });
    }
    const { InteractiveComment } = data
    const interactiveId = InteractiveComment.my_interactive.id
    const {
        data: { },
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
module.exports.content = {
    beforeDelete: ({ context, existingItem, operation, listKey, fieldPath }) => { beforeDelete(context, existingItem, operation, listKey, fieldPath) },
    afterChange: ({ context, resolvedData, listKey, fieldKey, operation, inputData, item, originalItem, originalInput, updatedItem, fieldPath }) => { afterCreate(context, resolvedData, listKey, fieldKey, operation, inputData, item, originalItem, originalInput, updatedItem, fieldPath) }
};