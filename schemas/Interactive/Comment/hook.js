const { gql } = require("@apollo/client");
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
    const id_comment = id;
    console.log('comment id: ', id)
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
module.exports.content = {
    afterChange: ({ context, resolvedData, listKey, fieldKey, operation, inputData, item, originalItem, originalInput, updatedItem, fieldPath }) => { afterCreate(context, resolvedData, listKey, fieldKey, operation, inputData, item, originalItem, originalInput, updatedItem, fieldPath) }
};