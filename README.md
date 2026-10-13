# Shopping Cart UI

A compact e-commerce front-end with a slide-out shopping cart, built with vanilla HTML, CSS and JavaScript. The project focuses on DOM manipulation and event handling without any frameworks.

<!-- Add a screenshot: create an "images/screenshot.png" file and uncomment the line below -->
<!-- ![Preview](images/screenshot.png) -->

## Features

- Responsive product grid (CSS Grid, `auto-fit`)
- Slide-out cart panel with a smooth CSS transition
- Add a product to the cart with one click
- Duplicate check: the same product can't be added twice
- Remove items from the cart
- Cart items are created dynamically with JavaScript

## Tech Stack

| Layer | Tools |
|-------|-------|
| Markup | HTML5 |
| Styling | CSS3 (Flexbox, Grid, transitions) |
| Logic | JavaScript (ES6) |
| Icons | [Remix Icon](https://remixicon.com/) |
| Font | Poppins (Google Fonts) |

## How It Works

1. The cart panel is hidden off-screen (`right: -100%`). Clicking the bag icon toggles the `active` class, and CSS slides the panel into view.
2. Each product card has an "add to cart" button. On click, JavaScript finds the parent card with `closest()` and reads its image, title and price.
3. A new cart item is built with `createElement` and `innerHTML`, then inserted into the cart with `appendChild`.
4. The remove icon deletes the item from the DOM with `remove()`.

## Project Structure

```
├── index.html     # page markup
├── style.css      # layout and styling
├── script.js      # cart logic
└── images/        # product images
```

## Getting Started

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
```

Then open `index.html` in your browser. No build step or dependencies required.

## Roadmap

- [ ] Quantity controls (+ / −)
- [ ] Total price calculation
- [ ] Cart item counter badge
- [ ] Save the cart in `localStorage`

## What I Practiced

- Selecting and traversing the DOM (`querySelector`, `closest`)
- Handling events (`addEventListener`)
- Creating and removing elements dynamically
- Toggling UI states with CSS classes (`classList`)
- Building layouts with Flexbox and CSS Grid
