import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts"],
  format: ["esm"],
  dts: false,        // ✅ IMPORTANT
  minify: true,
  external: ["react"],
});
