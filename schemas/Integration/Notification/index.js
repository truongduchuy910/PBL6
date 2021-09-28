let { Text, Relationship } = require("@itoa/fields");
const { gql } = require("graphql-request");
const Mail = require("./Mail");
const Messenger = require("./Messenger");
const { roleSeller } = require("@itoa/lib/access");
const { ip } = require("@itoa/lib/plugins");
module.exports = {
  fields: {
    group: { type: Relationship, ref: "NotificationGroup" },
    text: { type: Text },
    ip,
  },
  hooks: {
    validateInput: async ({ resolvedData, context }) => {
      await ip.hooks.validateInput({ context, resolvedData });
      let emoji = ["😄", "😁", "😊"];
      const {
        data: { NotificationGroup },
      } = await context.executeGraphQL({
        context,
        query: `
          query($id: ID!) {
            NotificationGroup(where: { id: $id }) {
              messengers {
                id
                psid
                full_name
                email
                phone
                of {
                  isPage
                  access_token
                }
              }
            }
          }
        `,
        variables: { id: resolvedData.group },
      });
      const { messengers } = NotificationGroup;
      messengers.map(async (messenger) => {
        const text = `🎉 ${resolvedData.text} ${
          emoji[Math.floor(Math.random() * emoji.length)]
        }
        ---
        Trân trọng,
        Itoa Chatbot, ${new Date().toLocaleString()}`;
        if (
          messenger.of.isPage &&
          messenger.of.access_token &&
          messenger.psid
        ) {
          Messenger.send({
            psid: messenger.psid,
            access_token: messenger.of.access_token,
            text,
          });
        }
      });

      const text = `
      🎉 ${resolvedData.text}.
      ---
      Trân trọng,
      Itoa Chatbot
      ${new Date().toLocaleString()}`;

      const mail = {
        subject: "🎉 THÔNG BÁO",
        from: `"itoa.vn" hi@loaloa.tech`,
        to: messengers.map((messenger) => messenger.email).join(","),
        text,
      };
      Mail.send(mail);
      return resolvedData;
    },
  },
  access: roleSeller,
  labelField: "full_name",
};
