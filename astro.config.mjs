import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),
  site: process.env.NODE_ENV === "development" ? "http://localhost:4321" : "https://www.rubenarakelyan.com",
  integrations: [tailwind()]
});
