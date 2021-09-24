const { Text, CalendarDay, Editor, DateTime } = require("@itoa/fields");
const { gql } = require("@apollo/client");
const { modelUser } = require("../access");
const lang = require("../lang.json");
const { users } = require("../cache");
module.exports = {
  fields: {
    date: {
      type: CalendarDay,
    },
    checkin: {
      type: DateTime,
    },
    checkout: {
      type: DateTime,
    },
    content: {
      type: Editor,
    },
    plan: {
      type: Editor,
    },
  },
  cacheHint: {
    scope: "PUBLIC",
    maxAge: 60 * 60, // 1 hour
  },
};
