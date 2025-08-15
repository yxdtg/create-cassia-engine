import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
    server: {
        host: "0.0.0.0",
    },
    base: "./",
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
});
