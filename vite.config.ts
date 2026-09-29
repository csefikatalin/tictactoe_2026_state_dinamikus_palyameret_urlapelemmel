import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/tictactoe_2026_state_dinamikus_palyameret_urlapelemmel/",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
});
