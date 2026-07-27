import { access, cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import vinext from "vinext";
import { defineConfig } from "vite";
import hostingConfig from "./.openai/hosting.json";

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

function sites() {
  let root = process.cwd();

  return {
    name: "sites",
    apply: "build",
    configResolved(config) {
      root = config.root;
    },
    async closeBundle() {
      const output = resolve(root, "dist", ".openai");
      const hosting = resolve(root, ".openai", "hosting.json");

      await rm(output, { recursive: true, force: true });
      await mkdir(output, { recursive: true });

      if (await exists(hosting)) {
        await cp(hosting, resolve(output, "hosting.json"));
      }
    },
  };
}

export default defineConfig(async () => {
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  const { cloudflare } = await import("@cloudflare/vite-plugin");

  return {
    plugins: [
      vinext(),
      sites(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        config: {
          main: "./worker/index.js",
          compatibility_flags: ["nodejs_compat"],
          d1_databases: hostingConfig.d1 ? [hostingConfig.d1] : [],
          r2_buckets: hostingConfig.r2 ? [hostingConfig.r2] : [],
        },
      }),
    ],
  };
});
