export default async function hockeyStackPlugin(context, opts) {
  return {
    name: "revenuecat-hockeystack-plugin",
    injectHtmlTags({ content }) {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
                var hsscript = document.createElement("script");
                hsscript.src = "https://cdn.jsdelivr.net/npm/hockeystack@latest/hockeystack.min.js";
                hsscript.async = 1;
                hsscript.dataset.apikey = "${opts.writeKey}";
                hsscript.dataset.cookieless = 1;
                hsscript.dataset.autoIdentify = 1;
                document.getElementsByTagName('head')[0].append(hsscript);
                `,
          },
        ],
      };
    },
  };
}
