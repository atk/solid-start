import type { VercelRequest } from "@vercel/node";
// @ts-ignore
import manifest from "../../.vercel/output/static/route-manifest.json";
// @ts-ignore
import entry from "./entry-server";

export default function (request: VercelRequest) {
  const response = entry({
    request,
    env: {
      manifest,
      getStaticHTML: path =>
        new Response(null, {
          headers: {
            "x-middleware-rewrite": new URL(`${path}.html`, request.url).href
          }
        })
    }
  });
  return response;
}
