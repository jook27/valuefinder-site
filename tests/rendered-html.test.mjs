import assert from "node:assert/strict";
import { readFile, readdir, access } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}


test("renders the actual product with working installation and section links", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /ValueFinder/);
  assert.match(html, /찾는 재무정보까지/);
  assert.match(html, /chromewebstore.google.com\/detail\/phinpnjelfnbdedgnnmbmpgnfnlknkhk/);
  for (const id of ["main-content", "top", "how", "install", "demo"]) assert.ok(html.includes('id="' + id + '"'), id);
  assert.doesNotMatch(html, /react-loading-skeleton|Your site is taking shape|226\.34|mock-button/);
});

test("preserves and renders all 12 original instructional screenshots", async () => {
  const manifest = JSON.parse(await readFile(new URL("../app/screenshots.json", import.meta.url), "utf8"));
  const originals = [];
  for (const folder of ["setup", "wayfinding", "howtouse"]) {
    const names = await readdir(new URL("../public/" + folder + "/", import.meta.url));
    originals.push(...names.filter(name => name.endsWith(".jpg") && !name.startsWith("._")).map(name => "./" + folder + "/" + name));
  }
  assert.equal(originals.length, 12);
  assert.deepEqual(Object.keys(manifest).sort(), originals.sort());
  const html = await (await render()).text();
  for (const original of originals) {
    const image = manifest[original];
    await access(new URL("../public/" + original.slice(2), import.meta.url));
    await access(new URL("../public/" + image.src.slice(2), import.meta.url));
    assert.ok(image.width > 0 && image.height > 0);
    assert.ok(html.includes('src="' + image.src + '"'), original);
  }
});

test("provides accessible enlargement, troubleshooting and all language choices", async () => {
  const html = await (await render()).text();
  assert.match(html, /<dialog[^>]*aria-labelledby="image-dialog-title"/);
  assert.match(html, /<details class="troubleshooting"/);
  assert.match(html, /<select[^>]*aria-label="Language"/);
  assert.equal((html.match(/<option /g) || []).length, 12);
  assert.equal((html.match(/class="screenshot-button"/g) || []).length, 12);
  assert.match(html, /loading="eager"/);
  assert.match(html, /loading="lazy"/);
});
