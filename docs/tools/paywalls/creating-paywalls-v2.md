---
title: Creating Paywalls
slug: creating-paywalls-v2
hidden: false
---

Use the Paywall Editor to design a fully customizable paywall.

## Concepts

| Concept              | Description                                                                                                           | Example                        |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------- | :----------------------------- |
| Components           | RevenueCat's predefined UI elements that can be added to a paywall.                                                   | Image component                |
| Component properties | The properties of each component that can be configured to modify it's style and behavior.                            | Width, height, alignment, etc. |
| Templates            | The paywalls that RevenueCat has already created that you can use as a starting point to build your own paywall from. | [screenshot?]                  |

## Base Components

| Component       | Description                                                                             |
| :-------------- | :-------------------------------------------------------------------------------------- |
| Text            | An element for displaying text.                                                         |
| Image           | An element for displaying uploaded images.                                              |
| Button          | An element that can be interacted with to navigate somewhere else                       |
| Stack           | A group                                                                                 |
| Package         | An element for describing and selecting a package to be purchased.                      |
| Purchase button | The call to action that envokes a purchase attempt of the selected package.             |
| Footer          | A configurable portion of your paywall whose position can be fixed and uniquely styled. |

:::info Complex components
Stacks, packages, and buttons are all complex components which are comprised of an array of base components within them.
:::

## Getting started

You can start creating your paywall by either:

1. Choosing a template, or
2. Starting from scratch

Unless you have a very specific, custom design in mind that you're looking to create; **we recommend starting with a template.** You can customize any aspect of your paywall once select a template, it's simply a starting point to explore from.

### Using the editor

Once you've selected a template or picked starting from scratch, you'll land on our Paywall Editor, which has the following sections:

1. **Layers**: The list of components on your paywall, their hierarchy, and their options (rename, duplicate, etc).
2. **Component properties**: The list of configurable properties of the component you've selected.
3. **Preview**: The preview of your paywall.
4. **Control panel**: The options to change the locale, light/dark mode, and other preview settings to see how your paywall looks in various scenarios. The control panel is also where you can manage localizations through one page instead of modifying them component-by-component.

### Arranging components

Components can be added to a paywall in two ways:

1. Directly to the main paywall with the **+ Add Component** button
2. Directly within a complex component, such as a stack, with the **+** button in that component's row in the layers panel.

Once a component has been added to a paywall, you can determine its order by dragging it vertically in the stack, or determine its parent component by dragging it underneath the desired parent and indenting it horizontally.

:::tip Parent & child components
A child component will be subject to the axis, alignment, distribution, and child spacing properties of the parent component; and will be impacted by other properties such as margin & padding.
:::

## Component properties

### Position properties

:::
Position properties only apply to parent components, since they control how the child components are arranged relative to one another.
:::

A parent component's **axis** controls whether its child components are arranged horizontally, vertically, or three-dimensionally.

--> illustration <--

**Alignment** determines how components are arranged against that axis; such as top, center, or bottom aligned elements across a horizontal axis.

--> illustration <--

**Distribution** determines how components are spaced along the defined axis. The available options are:

--> illustration <--

Last, **child spacing** determines exactly how much space should be set between each child component.

### Size properties

Each component's **width** and **height** can be sized to:

1. Fit the space needed for the content
2. Fill the available space for the component
3. Occupy a fixed space

--> illustration <--

### Layout properties

Each component's spacing can be configured through **margin** (added space outside of the component to create distance from adjacent components) and **padding** (added space within the component to create distance between the content and the edge of the component).

By default, you can configure horizontal and vertical margin and padding simultaneously, or you can click on the icon to the right of the property to switch to configuring each value uniquely.

--> screenshot <--

### Appearance properties

Each component may have a configurable **background color**, which can be a solid color or a gradient, and may have a specified opacity level.

A component's **shape** can additionally be configured to select between rectangle and pill.

Last, if the rectangle shape is used, then its **corner radius** can also be configured.

--> screenshot <--

### Border properties

Parent components can additionally have a specified **border color** and **border width** to create visual separation between them and other components.

### Drop shadow

Parent components can have a drop shadow configured for them via a customizable **position** (x and y axis offset), **blur** (size of the shadow effect), and **color**.

--> screenshot <--

## Variables

For some Paywall strings you may want to set values based on the package that’s being displayed instead of hardcoding a single value, such as when quoting a price, or describing the duration of an Introductory Offer.

To make this easier and ensure accuracy, we recommend using **Variables** for these values that are package-specific.

For example, to show a CTA like “Try 7 Days Free & Subscribe”, you should instead use the `{{ sub_offer_duration }}` variable, and enter “Try `{{ sub_offer_duration }}` Free & Subscribe” to ensure the string is accurate for any product you use, even if you make changes to the nature of the offer in the future.

We support the following variables:

--> table <--

## Additional topics to address

- Dark mode configuration
- Selected package properties
- Button navigation options
- Intro offer eligibility fields

## FAQs

| Question                                          | Answer |
| :------------------------------------------------ | :----- |
| How do I manage each localization for my paywall? | aasdf  |
