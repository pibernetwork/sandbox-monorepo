import { NextResponse } from "next/server";
import helloWorldCommonJS from "vanilla-lib-commonjs";
import helloWorldESModule from "vanilla-lib-esmodule";

const helloWorld = require("vanilla-lib-commonjs");

export function GET() {
  return NextResponse.json([
    helloWorldCommonJS(),
    helloWorldESModule(),
    helloWorld(),
  ]);
}
