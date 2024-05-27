import { NextResponse } from "next/server";
import helloWorldCommonJS from "vanilla-lib-commonjs";
import helloWorldESModule from "vanilla-lib-esmodule";

export function GET() {
  return NextResponse.json([
    `Backend ${helloWorldCommonJS()}`,
    `Backend ${helloWorldESModule()}`,
  ]);
}
