import { createServer } from "packages/start-node/server.js";
import { dirname, join } from "path";
import "solid-start/node/globals.js";
import { fileURLToPath } from "url";
// @ts-ignore
import manifest from "../../dist/public/route-manifest.json";
// @ts-ignore
import handler from "./handler.js";

const { PORT = 3000 } = process.env;

const __dirname = dirname(fileURLToPath(import.meta.url));
const paths = {
  assets: join(__dirname, "/public")
};

const server = createServer({
  paths,
  handler,
  env: { manifest },
});

server.listen(PORT, (err?: Error) => {
  if (err) {
    console.log("error", err);
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});
