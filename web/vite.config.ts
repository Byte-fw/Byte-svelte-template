import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [svelte()],
    base: "./",
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
            "@components": resolve(__dirname, "src/components"),
            "@utils": resolve(__dirname, "src/utils"),
            "@store": resolve(__dirname, "src/store"),
            "@assets": resolve(__dirname, "src/assets"),
        }
    }
});
