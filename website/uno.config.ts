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
        h1: {
          "font-weight": "700",
        },
        h2: {
          "font-size": "1.5rem",
        },
        a: {
          "text-decoration": "unset",
          "font-weight": "unset",
          color: "rgba(96,165,250,var(--un-text-opacity))",
        },
      },
    }),
    presetWebFonts({
      provider: "google",

      fonts: {
        sans: {
          name: "Plus Jakarta Sans",
          weights: ["400", "500", "600", "700"],
        },
      },
    }),
  ],
  transformers: [transformerDirectives()],
});
