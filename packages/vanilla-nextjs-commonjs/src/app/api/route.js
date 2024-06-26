import { NextResponse } from "next/server";
import vanillaHelloWorldCommonJS from "vanilla-lib-commonjs";
import vanillaHelloWorldESModule from "vanilla-lib-esmodule";

export function GET() {
  return NextResponse.json([
    vanillaHelloWorldCommonJS(),
    vanillaHelloWorldESModule(),
  ]);
}
