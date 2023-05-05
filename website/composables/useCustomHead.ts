export const useCustomHead = (
  title: string = "",
  description: string = "",
  image: string = "https://nuxt-lego.vercel.app/og.png"
) => {
  const formattedTitle = title + " | NuxtLego";
  return useSeoMeta({
    title() {
      return formattedTitle;
    },
    description() {
      return description;
    },
    ogTitle() {
      return formattedTitle;
    },
    ogDescription() {
      return description;
    },
    ogImage() {
      return image;
    },
    twitterTitle() {
      return formattedTitle;
    },
    twitterDescription() {
      return description;
    },
    twitterImage() {
      return image;
    },
    twitterCard: "summary_large_image",
  });
};
