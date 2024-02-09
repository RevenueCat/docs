export default async function lightboxPlugin(context, opts) {
  return {
    name: "revenuecat-lightbox-plugin",
    getClientModules() {
      const modules = ["./client-module"];
      return modules;
    },
  };
}
