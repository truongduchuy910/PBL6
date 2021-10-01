const { Relationship } = require("@itoa/fields");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
    active: true,
    fields: {
        reactions: {
            type: Relationship,
            ref: "InteractiveReaction.interactive",
            many: true,
        },
        comments: {
            type: Relationship,
            ref: "InteractiveComment.interactive",
            many: true
        },
        post: {
            type: Relationship,
            ref: "Post.interactive",
            many: false
        }
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
