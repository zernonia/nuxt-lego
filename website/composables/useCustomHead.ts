export const useCustomHead = (
  data: {
    title: string;
    description: string;
    image: string;
  } = {
    title: "",
    description: "",
    image: "/og.png",
  }
) => {
  return useSeoMeta({
    title: () => data.title,
    description: () => data.description,
    ogTitle: () => data.title,
    ogDescription: () => data.description,
    ogImage: () => data.image,
    twitterTitle: () => data.title,
    twitterDescription: () => data.description,
    twitterImage: () => data.image,
    twitterCard: "summary_large_image",
  });
};
