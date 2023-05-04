import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography({
      cssExtend: {
        "pre,code": {
          margin: 0,
        },
        h2: {
          "font-size": "1.5rem",
          "font-weight": "700",
        },
        a: {
          "text-decoration": "unset",
          "font-weight": "unset",
        },
      },
    }),
    presetWebFonts(),
  ],
  transformers: [transformerDirectives()],
});
