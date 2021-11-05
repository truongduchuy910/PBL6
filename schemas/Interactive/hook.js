const { gql } = require("@apollo/client");
async function beforeDelete(context, existingItem, operation, listKey, fieldPath) {
    console.log('existingItem', existingItem)
    console.log('fieldPath', fieldPath)

    const { id } = existingItem;
    const id_interactive = id;
    const {
        data: { Interactive },
        errors: interactiveError = [],
    } = await context.executeGraphQL({
        context,
        query: gql`
        query($id_interactive: ID!) {
            Interactive(where: { id: $id_interactive }) {
              comments {
                id
              }
              reactions {
                id
              }
            }
        }     
        `,
        variables: { id_interactive },
        skipAccessControl: true,
    });
    console.log(JSON.parse(JSON.stringify(Interactive)))
    const { comments = [], reactions = [] } = Interactive
    if (interactiveError || interactiveError.length) {
        interactiveError.map((error) => {
            console.log(error);
        });
    }
    console.log(comments)
    console.log(reactions)
}
module.exports.hook = {
    //beforeChange: contentBeforeChange,
    beforeDelete: ({ context, existingItem, operation, listKey, fieldPath }) => { beforeDelete(context, existingItem, operation, listKey, fieldPath) }
};
