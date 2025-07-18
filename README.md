# 🌌 Nexora - Futuristic Fashion E-Commerce

![Nexora Banner](https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)

> **Experience the future of fashion** with Nexora – a cutting-edge e-commerce platform built with Next.js that blends technology and style into a seamless shopping experience.

---

## ✨ Features

- 🚀 **Blazing Fast Performance** with Next.js 14 App Router
- 🎨 **Stunning Animations** powered by Framer Motion
- 🛒 **Modern Shopping Cart** with `use-shopping-cart`
- 🌓 **Dark/Light Mode** with seamless theme switching
- 📱 **Fully Responsive** mobile-first design
- 🔍 **Sanity CMS Integration** for effortless product management
- 💳 **Stripe Checkout** for secure payments
- ✨ **Interactive Particle Backgrounds** for immersive experience
- 🧩 **Modular Components** with Shadcn/ui
- 📊 **Optimized Performance** with lazy loading and image optimization

---

## 🛠️ Tech Stack

| Category      | Technology              |
| ------------- | ----------------------- |
| Framework     | Next.js 14 (App Router) |
| Styling       | Tailwind CSS            |
| Animations    | Framer Motion           |
| Shopping Cart | use-shopping-cart       |
| CMS           | Sanity                  |
| Payments      | Stripe                  |
| UI Components | Shadcn/ui               |
| Notifications | Sonner (Toast)          |
| Deployment    | Vercel                  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm / yarn / pnpm
- Sanity account
- Stripe account
- Vercel account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/nexora.git
cd nexora
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
```

4. **Fill in your credentials**

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-05-03
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser to: [http://localhost:3000](http://localhost:3000)

---

## 📦 Project Structure

```bash
nexora/
├── app/
│   ├── (main)/
│   │   ├── about/
│   │   ├── cart/
│   │   ├── category/
│   │   ├── product/
│   │   ├── shop/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Features.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Newest.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ShoppingCartModal.tsx
│   │   ├── Testimonials.tsx
│   │   └── ThemeProvider.tsx
│   └── lib/
│       └── sanity.ts
├── schemas/
│   ├── category.ts
│   ├── product.ts
│   └── ...
├── public/
│   ├── images/
│   └── opengraph-image.jpg
├── styles/
│   └── globals.css
├── .env.example
├── next.config.js
├── package.json
└── README.md
```

---

## 🎨 Design System

### 🎨 Colors

- **Primary**: `#8B5CF6` → `#EC4899` gradient
- **Dark Mode**: True black with purple accents
- **Light Mode**: Clean white with subtle gradients

### 🔤 Typography

- **Headings**: Bold, modern sans-serif with gradient text
- **Body**: Clean, readable Inter font

### 🌀 Animations

- Micro-interactions on all UI elements
- Smooth page transitions
- Hover effects with depth

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the project
2. Clone your fork:

```bash
git clone https://github.com/naijadevgamer/nexora.git
```

3. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

4. Commit your changes:

```bash
git commit -m "Add your awesome feature"
```

5. Push to your branch:

```bash
git push origin feature/your-feature
```

6. Open a Pull Request 🎉

> Please follow our Code of Conduct when contributing.

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

> First and foremost, all praise is due to **Allah**, the Most Merciful, who has granted me the knowledge and ability to complete this project.

Special thanks to:

- [Jan Marshal](https://janmarshal.com/about) for the inspiration and foundational work this project builds upon
- The **Next.js** team for their incredible framework
- **Sanity.io** for their flexible headless CMS
- **Stripe** for their developer-friendly payment solutions
- The open-source community for countless packages and tools

---

## 🌟 Support the Project

If you find this project useful, please consider:

- Giving a ⭐ on GitHub
- Sharing with your network
- Contributing code or documentation
- Reporting issues or suggesting features

---

## 🛍️ Step into the future of fashion with Nexora! 🚀

<div align="center">
  <sub>Built with ❤️ and Next.js</sub>
</div>
