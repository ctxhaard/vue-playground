const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
    specPattern: 'cypress/{component,unit_tests}/*.cy.{js,mjs}',
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
