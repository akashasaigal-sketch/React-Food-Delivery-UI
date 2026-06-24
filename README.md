Food Delivery Application Frontend
A modern, fast, and responsive Food Delivery Application frontend interface built with React and Tailwind CSS. This application features a seamless user experience for browsing food items, selecting categories, viewing item details, and managing a real-time shopping cart.

🚀 Features
Dynamic Food Browsing: Explore premium food options from various categories like Pizza, Burgers, Desi, and Desserts.

Category Filtering UI: Interactive category buttons to easily sort and find specific food items.

Interactive Modals: Detailed item views using smooth modal popups.

Real-time Shopping Cart:

Add items instantly from the menu.

Live updates for total cart count in the navigation bar.

Slide-out cart drawer to increase, decrease, or completely remove item quantities.

Modern UI/UX: Styled with a sleek dark theme (slate-950) and responsive grids optimized for both mobile and desktop screens.

🛠️ Tech Stack
Frontend Framework: React

Styling: Tailwind CSS

Icons: Lucide React

📦 Core Architecture & State Management
The core logic is handled efficiently within the main entry point (App.js) utilizing React's state management:

Cart State (cart): Dynamically updates item quantities and automatically filters out items when their quantity reaches zero.

UI Controls (cartOpen, selectedItem): Toggles the visibility of the slide-out Cart Drawer and Menu Modals seamlessly.
