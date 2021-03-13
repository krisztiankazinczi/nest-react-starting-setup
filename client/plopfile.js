const atomGenerator = require("./templateGenerators/generators/atom.ts");
const moleculeGenerator = require("./templateGenerators/generators/molecule.ts");
const organismGenerator = require("./templateGenerators/generators/organism.ts");
module.exports = function (plop) {
  plop.setGenerator("atom", atomGenerator);
  plop.setGenerator("molecule", moleculeGenerator);
  plop.setGenerator("organism", organismGenerator);
};
