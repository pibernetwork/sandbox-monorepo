import { NextResponse } from "next/server";
import helloWorldCommonJS from "vanilla-lib-commonjs";
import helloWorldESModule from "vanilla-lib-esmodule";

const helloWorldCommonJSRequire = require("vanilla-lib-commonjs");
// const helloWorldESModuleRequire = require("vanilla-lib-esmodule");

export function GET() {
  return NextResponse.json([
    helloWorldCommonJS(),
    helloWorldESModule(),
    helloWorldCommonJSRequire(),
  ]);
}
