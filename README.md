# Acharya Products Website

A modern, aesthetically rich e-commerce website for **Acharya Products**, a heritage brand crafting Indian incense, dhoop, and fragrances since 1956.

## ✨ Features

- **"Indian Magic" Aesthetic**: A visual theme inspired by Indian spirituality and luxury, featuring deep maroons, royal golds, and intricate mandala patterns.
- **Glassmorphism & Parallax**: Modern UI trends integrated with traditional design elements using **GSAP** and **Tailwind CSS**.
- **Product Catalog**: A filterable shop page displaying Incense, Dhoop, Camphor, Soaps, and Perfumes.
- **Shopping Cart**:
  - Global cart state managed via Context API.
  - Persistent storage using `localStorage`.
  - Elegant slide-out cart drawer.
  - **WhatsApp Checkout**: Orders are formatted into a WhatsApp message for direct inquiry processing.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & `@gsap/react`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript
- **Fonts**: `Cinzel` (Serif highlights) & `Inter` (Body text) via `next/font`.

## 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/acharya.git
    cd acharya
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

- `src/app`: App Router pages (`page.tsx`, `shop/`, `contact/`, `about/`).
- `src/components`: Reusable UI components (`Navbar`, `Footer`, `Hero`, `CartDrawer`).
- `src/context`: Global state managers (`CartContext`).
- `src/lib`: Utility functions (`utils.ts`).

## 🎨 Theme Configuration

Global styles are defined in `src/app/globals.css`.
- **Colors**:
  - `var(--maroon)` / `var(--maroon-dark)`
  - `var(--gold)` / `var(--gold-light)`
  - `var(--sand)` (Background)
- **Fonts**:
  - `var(--font-cinzel)` for headings.
  - `var(--font-inter)` for body text.

## 🤝 Contribution

Feel free to open issues or submit pull requests for any improvements.

---

*Made with devotion in Mumbai.*
