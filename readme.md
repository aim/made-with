# made-with

This repository contains the source code for the demo showcasing `aim-foundation`, an upcoming full-stack and all-in-one JavaScript framework.

To better understand the project, please take a look at the following documents:

- [Technical Q&A](./technical-qna.md) – Answers to common questions about design decisions and goals.
- [Technical RFC](./technical-rfc.md) – Topics for early discussion and feedback on technical matters.

**Be part of the journey — join our [Discord](https://discord.com/invite/NCNC7MA894) community for collaboration, support, and the latest updates.**

---

### About

`aim‑foundation` is an advanced framework that enables developers to design, build, and ship products without glue code. Powered by zero‑config `aim‑cli`, it generates production‑ready code and a first‑class developer experience out of the box.

### Concept

The system structures development around composable products: each repository is a project, and every directory a self-contained product. Combine products — design systems, icon sets, fonts, logos, graphics — to assemble sophisticated websites and applications.

### Design

The framework follows key principles of being lean and flexible, with a focus on simplicity and stability. It has zero runtime dependencies and minimal modules, with the goal of being future-proof by evolving with web standards internally — without introducing breaking changes for developers.

### Features

- **Rendering** – Custom JSX engine with minimal overhead
- **Reactivity** – Fine‑grained automatic UI updates
- **Routing** – File-based routes with lazy loading
- **Styling** – Unstyled primitives styled via the design system and a simple `style` prop API
- **Screens** - Auto-calculated token values for fluid design and resize events for responsive design
- **Events** – Delegated window and document event handling
- **Stores** – Global stores with optional persistence
- **Forms** – Schema‑driven form state and validation
- **Data** – Single API for fetching, caching, and syncing data
- **User** – Unified API for auth, roles, feature flags, and preference management
- **Media** – Asset pipeline for icons, fonts, and graphics
- **I18n** – Effortless built‑in localization
- **A11y** – WCAG‑compliant components by default
- **Config** – Reusable configuration accessible from anywhere
- **Tooling** – `aim‑cli` handles dev, build, test, and publish
