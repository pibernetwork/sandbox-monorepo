const vanillaHelloWorldCommonJS = require("vanilla-lib-commonjs");
const typescriptHelloWorldCommonJS = require("typescript-lib-commonjs");

const vanillaHelloWorldESModule = require("vanilla-lib-esmodule").default;

const typescriptHelloWorldESModule = require("typescript-lib-esmodule").default;

console.log(vanillaHelloWorldESModule());
console.log(typescriptHelloWorldESModule());
console.log(vanillaHelloWorldCommonJS());
console.log(typescriptHelloWorldCommonJS());
