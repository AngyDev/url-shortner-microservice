import { createClient } from "redis";

const client = createClient();

export default client;



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
