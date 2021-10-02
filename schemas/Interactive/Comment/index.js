const { Text, Relationship } = require("@itoa/fields");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
    active: true,
    fields: {
        content: {
            type: Text,
            isRequired: true,
        },
        interactive: {
            type: Relationship,
            ref: "Interactive.comments",
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