import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      "neutral-850": "#be2596",
    },
    fontFamily: {
      sans: "Switzer",
      mono: "Hack",
    },
    maxWidth: {
      container: "43rem",
    },
  },
});
