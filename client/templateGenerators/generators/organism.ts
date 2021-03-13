module.exports = {
  description: "Generates an organism component",
  prompts: [
    {
      type: "input",
      name: "component-name",
      message: "Organism component name",
    },
  ],
  actions: [
    {
      type: "add",
      path:
        "src/components/organisms/{{pascalCase component-name}}/{{pascalCase component-name}}.tsx",
      templateFile: "templateGenerators/organism.hbs",
    },
    {
      type: "add",
      path: "src/components/organisms/{{pascalCase component-name}}/index.ts",
      templateFile: "templateGenerators/genericIndex.hbs",
    },
    {
      type: "append",
      path: "src/components/organisms/index.ts",
      template:
        'export { default as {{pascalCase component-name}} } from "./{{pascalCase component-name}}";',
    },
  ],
};
