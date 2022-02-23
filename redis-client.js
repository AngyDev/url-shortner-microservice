import { createClient } from "redis";

const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

await client.connect();

async function postUrl(url, shortUrl) {
  // Sets the key, value
  await client.set(url, shortUrl);
  await client.set(shortUrl, url);
}

async function findUrl(key) {
  // Gets the key
  const url = await client.get(key);
  return url;
}

export { postUrl, findUrl };
