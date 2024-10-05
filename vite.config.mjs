// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
    base: "",
    build: {
        rollupOptions: {
            output: {
                entryFileNames: "cne-map.js",
                assetFileNames: "cne-map.css",
                chunkFileNames: "chunk.js",
                manualChunks: undefined,
            },
        },
    },
});
