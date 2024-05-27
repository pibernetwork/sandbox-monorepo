import helloWorldCommonJS from "vanilla-lib-commonjs";
import helloWorldESModule from "vanilla-lib-esmodule";
import { fetchHelloWorld } from "./lib/fetch-hello-word";

export default async function Home() {
  const inlineCommonJS = helloWorldCommonJS();
  const inlineESModule = helloWorldESModule();

  const serverHelloWorld = await fetchHelloWorld();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1>NextJS ESModule</h1>
        <div>
          <h2>Client-side</h2>
          <p>Client-side {inlineCommonJS}</p>
          <p>Client-side {inlineESModule}</p>
        </div>
        <div>
          <h2>Server-side</h2>
          {serverHelloWorld.map((helloWorld) => (
            <p key={helloWorld}>{helloWorld}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
