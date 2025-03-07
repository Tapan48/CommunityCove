import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/Social-Media-App/",
});

// tailwindcss() is a plugin that allows us to use tailwindcss within our vite project
// react() is a plugin that allows us to use react within our vite project
// defineConfig is a function that allows us to define the configuration for our vite project
// plugins is an array that contains the plugins we want to use in our vite project

// the plugins are used to configure the vite project
// the plugins are used to add functionality to the vite project
