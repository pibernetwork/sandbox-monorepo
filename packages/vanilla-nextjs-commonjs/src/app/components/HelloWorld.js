"use client";

import { useEffect, useState } from "react";
import { fetchHelloWorld } from "../lib/fetch-hello-word";

export function HelloWorld() {
  const [helloWorlds, setHelloWorlds] = useState([]);

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
