const { reads } = require("@itoa/lib");

const schemaConfigs = reads("", "./schemas");
schemaConfigs.map((config) => {
  const schema = require(config.path);
  if (schema.active) {
    console.log(`${config.name}`);
    for (var i in schema.fields) {
      const f = schema.fields[i];
      console.log(`- ${i}: ${f.type.type}`);
    }
  }
});
