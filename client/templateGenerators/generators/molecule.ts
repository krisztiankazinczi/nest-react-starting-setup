module.exports = {
  description: "Generates a molecule component",
  prompts: [
    {
      type: "input",
      name: "component-name",
      message: "Molecule component name",
    },
  ],
  actions: [
    {
      type: "add",
      path:
        "src/components/molecules/{{pascalCase component-name}}/{{pascalCase component-name}}.tsx",
      templateFile: "templateGenerators/molecule.hbs",
    },
    {
      type: "add",
      path: "src/components/molecules/{{pascalCase component-name}}/index.ts",
      templateFile: "templateGenerators/genericIndex.hbs",
    },
    {
      type: "append",
      path: "src/components/molecules/index.ts",
      template:
        'export { default as {{pascalCase component-name}} } from "./{{pascalCase component-name}}";',
    },
  ],
};
