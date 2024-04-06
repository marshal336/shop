module.exports = {
  main: {
    input: "./src/schemes/api/schema.yaml",
    output: {
      target: "./src/schemes/services/generate.service.ts",
      override: {
        mutator: {
          path: "./src/schemes/api/api-instance.ts",
          name: "create",
        },
      },
    },
  },
};
