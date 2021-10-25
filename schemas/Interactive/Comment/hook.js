const { gql } = require("@apollo/client");
async function afterCreate({ keystone, id }) {
    
}
module.exports.content = {
    afterCreate: afterCreate
};