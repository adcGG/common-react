import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import { unocssRules, unocssShortcuts } from "./uno.config";
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS({
    // rules: unocssRules,
    // shortcuts: unocssShortcuts,
    presets: [
      presetUno(),
      presetAttributify(),
    ],
    transformers: [
      transformerAttributifyJsx(), // <--
    ],
  })],
})
