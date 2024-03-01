export default async function sixSensePlugin(context, opts) {
  return {
    name: "revenuecat-6sense-plugin",
    injectHtmlTags({ content }) {
      return {
        headTags: [
          {
            tagName: "script",
            innerHTML: `
              window._6si = window._6si || [];
              window._6si.push(['enableEventTracking', true]);
              window._6si.push(['setToken', '${opts.writeKey}']);
              window._6si.push(['setEndpoint', 'b.6sc.co']);
              (function() {
                var gd = document.createElement('script');
                gd.type = 'text/javascript';
                gd.async = true;
                gd.src = '//j.6sc.co/6si.min.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(gd, s);
              })();
              `,
          },
        ],
      };
    },
  };
}
