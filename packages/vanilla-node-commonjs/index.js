const helloWorldCommonJS = require("vanilla-lib-commonjs");
const v1 = require("vanilla-lib-esmodule").default;

console.log(v1);

async function runHelloWorldESModule() {
  const helloWorldESModule = (await import("vanilla-lib-esmodule")).default;
  console.log(helloWorldESModule());
}

runHelloWorldESModule();
console.log(helloWorldCommonJS());
