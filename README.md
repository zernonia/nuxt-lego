<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/zernonia/nuxt-lego">
    <img src="website/public/logo.svg" alt="Logo" width="80" height="80" />
  </a>
  <h2 align="center"><strong>NuxtLego</strong></h2>

  <p align="center"> 
    Unstyled components for building your
Nuxt content quick & beautiful.
    <br />
    <br />
    <a href="https://nuxt-lego.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/zernonia/nuxt-lego/issues">Report Bug</a>
    ·
    <a href="https://github.com/zernonia/nuxt-lego/issues">Request Feature</a>
  </p>
</p>

![NuxtLego](website/public/og.png)

# 📇 About The Project

This idea was inspired by [Radix Primitive](https://www.radix-ui.com/), as well as [Oku UI](https://github.com/oku-ui). I wanted to try and create a _non-generic_ component, but using Radix's primitive approach. One example of non-generic component is [Static Tweet](https://nuxt-lego.vercel.app/docs/components/static-tweet).

This project also serve as a playground for me to learn and utilize more of Vue's `provide/inject` API.

Do let me know what component you have in mind that you are longing for ya!

# Getting started

```ts
export default defineNuxtConfig({
  extends: [
    ...,
    "github:zernonia/nuxt-lego#alpha",    // Currently in Alpha stage
  ]
})
```

# 🔥 Contributors

<a href="https://github.com/zernonia/nuxt-lego/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=zernonia/nuxt-lego" />
</a>
 
# 🌎 Local Development

## Prerequisites

Yarn

- ```sh
  npm install --global yarn
  ```

## Development

1. Clone the repo
   ```sh
   git clone https://github.com/zernonia/nuxt-lego.git
   ```
2. Install NPM packages

   ```sh
   yarn install
   ```

3. Run Development instance
   ```sh
   yarn dev
   ```

# ➕ Contributing

Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

# 📜 License

Not Associated with Supabase.

Distributed under the MIT License. See `LICENSE` for more information.

# 📧 Contact

Zernonia - [@zernonia](https://twitter.com/zernonia)

# ☕ Support

If you like my work, please buy me a coffee 😳

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png)](https://www.buymeacoffee.com/zernonia)
