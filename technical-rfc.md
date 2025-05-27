# Technical RFC

> This document outlines open technical questions under active consideration. Community feedback is welcome to help shape the design of the framework.

## Where to define whether a non-primitive component should be lazy or eager loaded?

By default, all non-primitive components are lazy loaded. There are two early ideas for making this configurable:

- Define it via a prop on the component, e.g. `loading="lazy"` or `loading="eager"`, optionally with a `fallback` prop as well.
- Define it as a comment in the component file, e.g. `// @lazy`.

The issue with the first approach is that if a reusable component is set to `eager` loading once on a page, it will be eager-loaded everywhere — making other `lazy` configurations redundant.

## Should lifecycle hooks be added to non-primitive components, e.g. `props/view.onMount` and `props/view.onUnmount`, or is having an `onUnmount` prop on the first primitive more flexible?

Currently, a component is simply a function that returns JSX. The core module does not track any lifecycle events during these function calls. To unsubscribe from reactive behavior, an `onUnmount` prop must be passed to the first primitive element rendered — this is triggered when the element is removed from the DOM.

Technically, it's possible to support lifecycle hooks at the component-level by injecting a component ID into the first HTML element. However, maintaining two different mechanisms for the same behavior could add unnecessary complexity.

Another possibility — particularly for cleaning up reactive values — is to handle destruction automatically at compile-time.

## Should support for custom tokens be added to the design system?

The current design system includes a finite set of tokens, aiming to stay as simple as possible while remaining flexible for a wide range of use cases. Introducing custom tokens could compromise the goal of user-centric design, where the UI adapts to individual needs or allows full user customization.

## What should the API for control flow primitives look like?

The system has 3 ways to handle control flow:

- Using the `hide` prop on a primitive component.
- Using the `selection` primitive component which has `value`, `render` and `fallback` props.
- Using the `iteration` primitive component which has `value`, `render` and `fallback` props.

## Should a single `graphic` primitive be used for all graphics, or separate primitives for each product type?

The current approach uses multiple graphic primitives — e.g., `photo-graphic`, `raster-graphic`, and `vector-graphic` — to represent different product types. This allows for tailored behavior; for example, a `vector-graphic` can be fetched and inlined with `fill="currentColor"` to adapt to the theme. In contrast, `photo-graphic` and `raster-graphic` have similar functionality and could potentially be unified.

## Should primitive components be fully customizable, or should customization occur through non-primitive components?

One idea is to introduce a `parts` prop that allows developers to override specific parts of a primitive component. The renderer would then use the provided parts instead of the default ones.

An alternative approach is to leave primitives predefined, and instead give developers full flexibility by encouraging the creation of custom non-primitive components using areas and events — for example, recreating a `dropdown` component from scratch.

## Should localization and internationalization be handled with unified primitives or specialized ones?

To display localized content, one approach is to introduce specialized primitives such as `intl/local-text`, `intl/local-number`, and `intl/local-date`. Alternatively, a unified `text` primitive could handle various localization needs using props like `value` for static or reactive content, `key` and `values` for translated templates, or even a `format` prop for dynamic rendering.
