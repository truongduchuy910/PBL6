const { Text, Relationship, Images } = require("@itoa/fields");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
    fields: {
        content: {
            type: Text,
            isRequired: true,
        },
        tags: {
            type: Relationship,
            ref: "Tag.posts",
            many: true,
        },
        images: {
            type: Images,
            ref: "UploadImage",
            search: "alt",
            file: "file",
            label: "Hình thêm",
            many: true,
        },
        interactive: {
            type: Relationship,
            ref: 'Interactive.post',
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
