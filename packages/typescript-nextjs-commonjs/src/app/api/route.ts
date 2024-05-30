import { NextResponse } from "next/server";
import typescriptHelloWorldCommonJS from "typescript-lib-commonjs";
import typescriptHelloWorldESModule from "typescript-lib-esmodule";
import vanillaHelloWorldCommonJS from "vanilla-lib-commonjs";
import vanillaHelloWorldESModule from "vanilla-lib-esmodule";

const helloWorld = require("vanilla-lib-commonjs");

export function GET() {
  return NextResponse.json([
    vanillaHelloWorldCommonJS(),
    vanillaHelloWorldESModule(),
    typescriptHelloWorldESModule(),
    typescriptHelloWorldCommonJS(),
    helloWorld(),
  ]);
}
