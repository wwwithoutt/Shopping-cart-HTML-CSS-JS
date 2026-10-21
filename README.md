# 🛒 Shopping Cart UI

A compact, responsive e-commerce front-end with a slide-out shopping cart. Built entirely with **vanilla HTML, CSS, and JavaScript**. This project is my hands-on practice with DOM manipulation, event handling, and dynamic UI updates without relying on any frameworks.

<!-- Add a screenshot: create an "images/screenshot.png" file and uncomment the line below -->
<!-- ![Preview](images/screenshot.png) -->

## ✨ Features

- **Responsive Layout**: Product grid built with CSS Grid (`auto-fit`).
- **Slide-out Cart**: Smooth CSS transition for the cart panel.
- **Smart "Add to Cart"**: 
  - Click a product to add it dynamically.
  - If a product is already in the cart, its **quantity increases automatically** (no duplicate rows!).
- **Quantity Controls**: Built-in `+` and `-` buttons to adjust item counts directly in the cart.
- **Real-time Total**: The total price updates automatically whenever items are added, removed, or quantities change.
- **Dynamic DOM**: Cart items are generated entirely via JavaScript template literals.

## 🛠 Tech Stack

| Layer | Tools |
|-------|-------|
| **Markup** | HTML5 |
| **Styling** | CSS3 (Flexbox, Grid, Transitions) |
| **Logic** | JavaScript (ES6, Vanilla) |
| **Icons** | [Remix Icon](https://remixicon.com/) |
| **Fonts** | Poppins (Google Fonts) |

## ⚙️ How It Works (The Logic)

1. **UI Toggle**: The cart panel starts off-screen (`right: -100%`). Clicking the bag icon toggles the `.active` class, sliding it into view.
2. **DOM Traversal**: Clicking "Add to Cart" uses `event.target.closest()` to find the parent product card and extracts its specific image, title, and price.
3. **Cart Management**: 
   - JS checks if the item already exists in the cart list. If yes, it parses the current quantity and increments it.
   - If no, it uses `createElement` and `innerHTML` to build a new cart row and appends it to the DOM.
4. **Price Calculation**: A dedicated `updateTotalPrice()` function iterates over all cart items, cleans the price strings (removes the `$` sign), multiplies by the current quantity, and renders the final sum.

## 📂 Project Structure

```text
├── index.html     # Page markup (incl. cart sidebar)
├── style.css      # Layout, flexbox/grid, UI styling
├── script.js      # Cart logic (add, remove, calc, toggle)
└── images/        # Product images folder


🚀 Getting Started

No build steps, no dependencies. Just clone and run!

git clone [https://github.com/](https://github.com/)<your-username>/<repo-name>.git
cd <repo-name>


Simply open index.html in your favorite browser.

📌 Roadmap (What's Next)

⚬ [x] Quantity controls (+ / −)
⚬ [x] Total price calculation
⚬ [ ] Cart item counter badge (on the main cart icon)
⚬ [ ] Save the cart data in localStorage so it persists after refresh

🧠 What I Practiced

⚬ DOM Manipulation: querySelector, createElement, closest(), appendChild(), remove().
⚬ Event Handling: addEventListener and event delegation.
⚬ Data Processing: Extracting string values from the DOM, converting them to numbers (parseInt(), .replace()), and executing math operations.
⚬ CSS Styling: Managing UI states with class toggling (classList), flexbox alignments, and responsive CSS grid sizing.

