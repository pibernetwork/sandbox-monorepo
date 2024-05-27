import { getBaseURL } from "../utils/url";

export async function fetchHelloWorld() {
  const response = await fetch(`${getBaseURL()}/api`);

  const data = await response.json();

  return data;
}
