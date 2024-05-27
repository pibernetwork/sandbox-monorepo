import { helloWorld as HelloWorldCommonJS } from "vanilla-lib-commonjs/lib/hello-world.js";
import { helloWorld as helloWorldESModule } from "vanilla-lib-esmodule/lib/hello-world.js";

console.log(helloWorldESModule());
console.log(HelloWorldCommonJS());
