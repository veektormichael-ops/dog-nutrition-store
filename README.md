# Healthy Dog Meal Landing Page

A **responsive React + TypeScript landing page** for a nutritious dog food brand. The design mirrors the original Figma layout and is styled entirely with **Tailwind CSS**, using reusable and modular components like `Wrapper`, `Button`, `HealthyDemo`, `WholsomeNutrition`, and `Nutrition` to highlight the product’s key benefits.

---

## Features

* Built with **React + TypeScript**
* Styled using **Tailwind CSS**
* **Fully responsive** across all screen sizes
* **Modular, reusable components** for scalability
* **Asset-driven content** (images, icons, data points)
* **Clean, structured layout** optimized for readability and maintenance

---

## Responsive Design

Designed mobile-first with **Tailwind’s responsive utilities** (`sm:`, `md:`, `xl:`) to adapt layouts and image scaling dynamically.

Examples:

* `flex-col-reverse xl:flex-row` — changes layout direction by screen size
* `w-full xl:w-1/2` — adjusts column width for larger screens
* `px-4 lg:px-8` — scales padding from mobile to desktop

---

## Component Overview

### `Wrapper` Component

Encapsulates content with consistent max width (`1200px`), center alignment, and responsive horizontal padding.

### `Nutrition` Component

Showcases two main visual sections with alternating image and text layouts, using responsive flex direction for smooth stacking on mobile.

### `HealthyDemo` Component

Displays the product’s core differentiators, paired with a feature image, CTA button, and trust indicators like payment or guarantee icons.

### `WholsomeNutrition` Component

Highlights nutritional benefits with a side image, key stats, and a call-to-action button. Automatically switches to a vertical stack on smaller screens.

### `Button` Component

A reusable, styled button with hover effects and optional inline styles for flexible use across sections.

### `HealthyMeal` Page

Combines all major sections (`HealthyDemo`, `WholsomeNutrition`, `Nutrition`) inside the `Wrapper`, ensuring consistent spacing and background transitions between sections.

---

## Assets

All images are imported using path aliases:

```tsx
import eatingDog from "@/assets/dog-eating.png";
```

Ensure alias support is configured in your `tsconfig.json` and bundler (Vite/Webpack).

---

## License

**MIT** — Free to use, modify, and distribute.

---

## Resources

* [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
* [React Documentation](https://react.dev)
