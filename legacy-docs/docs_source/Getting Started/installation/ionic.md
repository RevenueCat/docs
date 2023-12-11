---
title: Ionic
slug: ionic
excerpt: Instructions for Installing Purchases SDK for Ionic
hidden: false
---

We offer official plugins for both Capacitor and Cordova. We recommend using the Capacitor plugin when possible. Install the plugin depending on your framework:

[block:file]
[
  {
    "language": "text",
    "name": "Capacitor",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_capacitor.txt"
  },
  {
    "language": "text",
    "name": "Cordova",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_cordova.txt"
  }
]
[/block]

## TypeScript

The types are shipped inside the npm package. You can import them like this:

[block:file]
[
  {
    "language": "text",
    "name": "Capacitor Typescript types",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_typescript_capacitor.ts"
  },
  {
    "language": "text",
    "name": "Cordova Typescript types",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_typescript_cordova.ts"
  }
]
[/block]

## Angular

Wait for the Platform to be ready, then configure the plugin in your `src/app/app.component.ts`:

[block:file]
[
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_angular_capacitor.ts"
  },
  {
    "language": "typescript",
    "name": "Cordova",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_angular_cordova.ts"
  }
]
[/block]

## React

Import the plugin object then use its static methods:

[block:file]
[
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_react_capacitor.ts"
  },
  {
    "language": "typescript",
    "name": "Cordova",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_react_cordova.ts"
  }
]
[/block]

## Vue.js

> 🚧 Important note if using Vue.js reactivity wrappers
> 
> If using Vue.js and its Reactivity API wrappers like [reactive](https://vuejs.org/api/reactivity-core.html#reactive) or [readonly](https://vuejs.org/api/reactivity-core.html#readonly), make sure you pass the raw objects (rather than `Proxy` objects) to the Capacitor plugin methods. You can use the [toRaw](https://vuejs.org/api/reactivity-advanced.html#toraw) method to convert to the raw object.

Import the plugin object then use its static methods:

[block:file]
[
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/🚀 Getting Started/installation/ionic_vuejs_capacitor.ts"
  }
]
[/block]
