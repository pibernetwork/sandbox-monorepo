const helloWorldCommonJS = require("vanilla-lib-commonjs");

async function runHelloWorldESModule() {
  const helloWorldESModule = (await import("vanilla-lib-esmodule")).default;
  console.log(helloWorldESModule());
}

runHelloWorldESModule();
console.log(helloWorldCommonJS());
