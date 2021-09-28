/*
 * This is a keystone list that stores facebook messages
 */
const { gql } = require("@apollo/client");
let { Text, Relationship } = require("@itoa/fields");
const Momo = require("../Momo");
const { roleSeller } = require("@itoa/lib/access");
const { ip } = require("@itoa/lib/plugins");
module.exports = {
  fields: {
    returnUrl: { type: Text, isRequired: true }, // tra ve khi quet thanh cong
    extraData: { type: Text, isRequired: true }, // it's payment identity
    amount: { type: Text, isRequired: true },
    orderInfo: { type: Text },
    payUrl: { type: Text },
    business: { type: Relationship, ref: "MomoBusiness" },
    ip,
  },
  hooks: {
    validateInput: async ({ context, resolvedData }) => {
      await ip.hooks.validateInput({ context, resolvedData });
      const {
        returnUrl,
        extraData,
        amount,
        orderInfo,
        business,
      } = resolvedData;
      const {
        data: { MomoBusiness },
      } = await context.executeGraphQL({
        context,
        query: gql`
          query($business: ID!) {
            MomoBusiness(where: { id: $business }) {
              id
              partner
              access
              secret
              endpoint
            }
          }
        `,
        variables: {
          business,
        },
      });
      const { id, partner, access, secret, endpoint } = MomoBusiness;
      const data = await Momo.transactionProcessor({
        returnUrl,
        extraData,
        amount,
        orderInfo,
        id,
        partner,
        access,
        secret,
        endpoint,
      });
      if (data) resolvedData.payUrl = data.payUrl;
    },
  },
  // access: roleSeller,
  labelField: "extraData",
};
