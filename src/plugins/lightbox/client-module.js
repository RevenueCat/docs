import mediumZoom from "medium-zoom";

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname !== previousLocation?.pathname) {
    // Wait for the page to be fully loaded
    setTimeout(() => {
      mediumZoom(".markdown img", { margin: 20 });
    }, 500);
  }
}
