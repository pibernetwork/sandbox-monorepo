import typescriptHelloWorldCommonJS from "typescript-lib-commonjs";
import typescriptHelloWorldESModule from "typescript-lib-esmodule";
import vanillaHelloWorldCommonJS from "vanilla-lib-commonjs";
import vanillaHelloWorldESModule from "vanilla-lib-esmodule";
import { HelloWorld } from "./components/HelloWorld";

export default async function Home() {
  const helloWorlds = [
    vanillaHelloWorldCommonJS(),
    vanillaHelloWorldESModule(),
    typescriptHelloWorldCommonJS(),
    typescriptHelloWorldESModule(),
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1>NextJS ESModule</h1>
        <div>
          <h2>Server-side</h2>
          {helloWorlds.map((helloWorld) => (
            <p key={helloWorld}>Server-side {helloWorld}</p>
          ))}
        </div>
        <HelloWorld />
      </div>
    </main>
  );
}
