# Technical Q&A

## Why create another JavaScript framework?

Web development today feels fragmented and unstable — despite the fact that web standards themselves are not. The overwhelming number of tools and choices often paralyzes developers when configuring their tech stack. And with the constant churn and unpredictable breaking changes, much of that code often ends up needing to be rewritten or discarded within a year.

While current frameworks solve many problems well, they often focus narrowly on rendering — introducing additional complexity through layers like the virtual DOM or compile-time optimizations. As a result, product teams are left stitching together critical pieces manually. But rendering is only one part of the puzzle. Building real applications requires a holistic approach that addresses more than just how elements appear on screen.

This framework avoids the virtual DOM entirely, opting to mutate the DOM directly. It stays close to web standards while introducing thoughtful abstractions to manage different concerns effectively. It's not just about UI — additional product types, such as server APIs, will be introduced to complete the puzzle. The aim is simplicity and stability, enabling developers to build products that remain viable for as long as the web platform itself does.

## Why organize and structure by product?

Organizing by product enables automated processing of resources and assets required for optimized applications. This approach removes the need for external tools like generate-favicon.com, image optimizers, or sitemap generators. Each product type can eventually include its own built-in tools and editors, fostering a more self-contained and scalable development workflow.

The core idea is to create and compose products — using smaller, reusable units to build more complex, integrated solutions.

## Why JSX instead of a template syntax?

JSX is a powerful syntax that enables developers to write XML-like code directly within JavaScript. It offers a more intuitive way to define UI components and their behavior, making application logic easier to understand and maintain. By using JSX, developers gain the full expressive power of JavaScript while retaining a clear and structured way to declare UI elements.

Its flexibility and composability make it superior to traditional template syntaxes, which often impose constraints and disconnect logic from structure.

## Why abstract HTML and rename HTML elements?

HTML elements are browser implementations that come with default styling and behavior. Abstracting them allows for:

- Unstyled, customizable, and extensible primitives.
- Greater control over component behavior and structure.
- A consistent and predictable developer experience.

This approach reduces coupling to browser-specific semantics and improves long-term maintainability and flexibility in building UI systems.

Under the hood, the framework uses native HTML elements when possible. In cases where more control is needed, it falls back to custom structures — such as div elements combined with data and ARIA attributes — to support customization and extensibility.

Primitive component names follow ARIA roles rather than raw HTML tags. This promotes a mindset shift and avoids conflicts with native expectations, enabling developers to think in terms of behavior and accessibility rather than raw implementation.

## Why abstract CSS and rename CSS properties?

Abstracting and simplifying CSS was one of the most challenging and time-consuming aspects of building the framework. While CSS is powerful, it is also complex — filled with an ever-growing list of properties and syntaxes. Some are outdated, others require polyfills, and many are inconsistent by design.

The execution was hard, but the goal was straightforward:

- Provide default styling for primitive components through the design system.
- Provide one `style` prop to cover all remaining styling needs.

Behind the scenes, the `style` prop intelligently maps to inline styles, utility classes and reusable style tags injected into the document head.

To support this system, CSS property names were adapted to better fit object notation and integrate cleanly with design system tokens. Some renaming decisions were also influenced by efforts to address long-standing issues noted in the [Incomplete List of Mistakes in the Design of CSS](https://wiki.csswg.org/ideas/mistakes). No time machine exists to fix CSS’s historical quirks — but this may be a step in that direction.

## Why abstract Web APIs into 3 global JavaScript modules?

Web APIs are typically low-level, event-driven, and imperative — some designed for library authors, others for developers. For example, managing event listeners across `window`, `document`, or individual elements often results in verbose, repetitive, and error-prone boilerplate.

By abstracting these APIs into three global modules — view, data, and user — the framework unifies and simplifies interaction with the platform. This design allows side effects to be wrapped as reactive values, providing a consistent way to handle UI changes. It promotes a cohesive, reactive architecture with a single mental model, and supports a more declarative programming style while reducing unnecessary complexity.

## Why use `ReactiveValue` for reactivity instead of Signals or other reactive models?

Many frameworks implement their own reactivity systems, and language-level proposals like Signals are still evolving. `ReactiveValue` was designed to provide:

- A minimal and expressive API.
- Unified handling of both reactive and derived values.
- Special handling for various data types and structures.

```js
const count = view.state(0);
const doubleCount = view.state(() => count.value * 2);
```

This model reduces the number of concepts developers need to learn and supports concise, composable state management without additional layers.

Reactivity isn't limited to `view.state()` — it's integrated throughout the system. For example, `view.size()` and `view.scroll()` return reactive values that automatically update when the underlying data changes. Developers can subscribe to these values and react declaratively to changes across the application.

## Why file-based routing?

File-based routing enforces a convention-over-configuration approach by providing a standardized file structure that delivers routing functionality out of the box. This eliminates the need for developers to manually define routes or reinvent folder structures for each project. Pages (UIs) and endpoints (APIs) are created by simply adding files, making the routing hierarchy easier to understand, maintain, and scale.

## Why `/#/` in the URL?

To support deployment on static hosting providers like GitHub Pages, a web app can be configured to use a hash-based routing system. This enables client-side navigation and bookmarking without requiring server-side routing or configuration.

## What’s next?

The immediate focus is on exposing more web APIs through the `view`, `data`, and `user` modules — especially around transitions and animations to make the demo feel more polished and high-quality. Additional primitive components will be developed, along with more examples and real-world use cases.

Ongoing efforts include performance optimizations such as tree-shaking, as well as strengthening code assurance through assertions, tests, and JSDoc definitions.

New product types are also on the roadmap — including rest-api, mail, and document — to expand the framework’s capabilities beyond UI.

## How can someone contribute?

The framework is still evolving and remains closed source while foundational work is being finalized — including test coverage, documentation, internal stability, and overall structure.

For now, contributions are limited to a small group of early collaborators. If you're interested in contributing, shaping the framework, or testing ideas early, feel free to reach out directly for a conversation. The project is expected to be open-sourced later this year.
