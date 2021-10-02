const { Uuid, Checkbox } = require("@itoa/fields");
const { multipleLanguage } = require("@itoa/lib/plugins");
module.exports = {
    active: true,
    fields: {
        createBy: {
            type: Uuid
        },
        to: {
            type: Uuid
        },
        isAccepted: {
            type: Checkbox
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