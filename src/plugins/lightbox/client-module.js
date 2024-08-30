import mediumZoom from "medium-zoom";

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname !== previousLocation?.pathname) {
    // Wait for the page to be fully loaded
    setTimeout(() => {
      // Updated selector to exclude images within feature-container
      mediumZoom(".markdown img:not(.icon-background img)", { margin: 20 });
    }, 500);
  }
}
