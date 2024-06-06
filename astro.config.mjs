import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: cloudflare({
    imageService: "passthrough"
  }),
  site: process.env.NODE_ENV === "development" ? "http://localhost:4321" : "https://www.rubenarakelyan.com",
  integrations: [tailwind()]
});
