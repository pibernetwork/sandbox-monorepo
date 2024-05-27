import helloWorldCommonJS from "vanilla-lib-commonjs";
import helloWorldESModule from "vanilla-lib-esmodule";
import { HelloWorld } from "./components/HelloWorld";

export default async function Home() {
  const inlineCommonJS = helloWorldCommonJS();
  const inlineESModule = helloWorldESModule();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1>NextJS ESModule</h1>
        <div>
          <h2>Server-side</h2>
          <p>Server-side {inlineCommonJS}</p>
          <p>Server-side {inlineESModule}</p>
        </div>
        <HelloWorld />
      </div>
    </main>
  );
}
