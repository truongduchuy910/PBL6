const { Select } = require("@itoa/fields");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
    fields: {
        emoji: {
            type: Select,
            isRequired: true,
            isUnique: true
        },
        interaction: {
            type: Relationship,
            ref: "Interactive.reactions",
            many: false
        },
    },
    ...multipleLanguage("Translate"),
    labelField: "",
    access: true,
    // access: modelUser,
    hooks: {

    },
    cacheHint: {
        scope: "PUBLIC",
        maxAge: 60 * 60, // 1 hour
    }
};
