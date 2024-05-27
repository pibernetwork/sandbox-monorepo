"use client";

import { fetchHelloWorld } from "@/app/lib/fetch-hello-word";
import { useEffect, useState } from "react";

export function HelloWorld() {
  const [helloWorlds, setHelloWorlds] = useState<string[]>([]);

  useEffect(() => {
    async function loadHelloWorld() {
      const serverHelloWorld = await fetchHelloWorld();
      setHelloWorlds(serverHelloWorld);
    }

    loadHelloWorld();
  }, []);

  if (helloWorlds.length <= 0) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Client-side</h2>
      {helloWorlds.map((helloWorld) => (
        <p key={helloWorld}>Client-side {helloWorld}</p>
      ))}
    </div>
  );
}
