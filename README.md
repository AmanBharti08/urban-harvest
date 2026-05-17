# Urban Harvest Grocery App

A responsive grocery shopping application built with Next.js, TypeScript, and Tailwind CSS.

# Features

- Browse grocery products
- Filter products by category
- Add items to cart
- Increase/decrease product quantity
- Out-of-stock handling
- Dynamic cart sidebar
- Order summary with subtotal and delivery fee
- Place order functionality
- Responsive design

# Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React Icons

# Project Structure

├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Header.tsx
│   ├── FilterBar.tsx
│   └── ProductGrid.tsx
│
├── data/
│   └── products.ts
│
├── types/
│   └── products.ts
│
├── utils/
│   └── cart.ts
│
└── constants/
    └── index.ts

---

# Project Structure Explanation

The project is structured by separating UI, data, logic, and types into different folders to keep the code modular, reusable, and easier to maintain.

--- components/
Contains reusable UI components such as the header, filter bar, and product grid.
--- data/
Stores static product data separately from UI logic.
--- types/
Contains TypeScript interfaces for type safety and better code consistency.
--- utils/
Contains reusable helper functions such as cart calculations.
--- constants/
Stores reusable constant values like delivery fees.
--- app/
Contains the main application pages and global styles using the Next.js App Router.

This structure improves readability and keeps business logic separated from presentation logic.

# How to Run the Project Locally

1. Clone the repository using "git clone https://github.com/AmanBharti08/urban-harvest.git"
2. cd urban-harvest
3. npm install
4. npm run dev
5. Visit "http://localhost:3000"

# Notes
Product data is currently hardcoded for the assignment.
Cart state is managed using React state hooks.
The application is fully responsive for desktop and mobile screens.