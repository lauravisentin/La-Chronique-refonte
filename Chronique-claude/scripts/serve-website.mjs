import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve } from "node:path";

const port = Number.parseInt(process.env.PORT || "5173", 10);
const projectRoot = resolve(".");
const websiteRoot = resolve("ui_kits", "website");

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jsx": "text/babel; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

function resolveRequest(url) {
  const pathname = decodeURIComponent(new URL(url, `http://localhost:${port}`).pathname);
  const cleanPath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const firstSegment = cleanPath.split(/[\\/]/).filter(Boolean)[0];
  const root = ["assets", "uploads", "preview", "fonts"].includes(firstSegment) || firstSegment === "colors_and_type.css"
    ? projectRoot
    : websiteRoot;
  const target = resolve(root, cleanPath === "/" ? "index.html" : `.${cleanPath}`);

  if (!target.startsWith(root)) {
    return null;
  }

  if (existsSync(target) && statSync(target).isDirectory()) {
    return join(target, "index.html");
  }

  return target;
}

createServer((req, res) => {
  const file = resolveRequest(req.url || "/");

  if (!file || !existsSync(file)) {
    res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  res.writeHead(200, { "content-type": types[extname(file)] || "application/octet-stream" });
  createReadStream(file).pipe(res);
}).listen(port, () => {
  console.log(`La Chronique website kit: http://localhost:${port}`);
});
