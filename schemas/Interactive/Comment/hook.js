const { gql } = require("@apollo/client");
async function afterCreate({ keystone, id }) {
    const {
        data: { createInteractive },
        errors: createInteractiveError = [],
    } = await keystone.executeGraphQL({
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
    if (createInteractiveError && createInteractiveError.length) {
        createInteractiveError.map((error) => {
            console.log(error);
        });
    }
    var idInteractive = createInteractive.id
    const {
        data: { updateInteractiveComment },
        errors: updateInteractiveCommentError = [],
    } = await keystone.executeGraphQL({
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
        variables: { id, idInteractive },
        skipAccessControl: true,
    });
    if (updateInteractiveCommentError && updateInteractiveCommentError.length) {
        updateInteractiveCommentError.map((error) => {
            console.log(error);
        });
    }
}
module.exports.content = {
    afterCreate: afterCreate
};