module.exports = {
  description: "Generates an atom component",
  prompts: [
    {
      type: "input",
      name: "component-name",
      message: "Atom component name",
    },
  ],
  actions: [
    {
      type: "add",
      path:
        "src/components/atoms/{{pascalCase component-name}}/{{pascalCase component-name}}.tsx",
      templateFile: "templateGenerators/atom.hbs",
    },
    {
      type: "add",
      path: "src/components/atoms/{{pascalCase component-name}}/index.ts",
      templateFile: "templateGenerators/genericIndex.hbs",
    },
    {
      type: "append",
      path: "src/components/atoms/index.ts",
      template:
        'export { default as {{pascalCase component-name}} } from "./{{pascalCase component-name}}";',
    },
  ],
};
