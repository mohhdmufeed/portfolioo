<div align="center">

# 🚀 Mohammed Mufeed — Portfolio

**AI/ML & Full Stack Developer**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A modern, interactive portfolio website featuring 3D elements, smooth animations, and a premium dark-mode design — built to showcase my projects, skills, certifications, and professional experience.

[**🌐 Live Demo**](https://portfolioo-mufeed1.vercel.app/) · [**📧 Contact**](mailto:mohhdmufeed@gmail.com) · [**💼 LinkedIn**](https://linkedin.com/in/mohhdmufeed)

</div>

---

## ✨ Features

### 🎮 3D Interactive Environment
- Fully rendered 3D workspace using **Three.js** and **React Three Fiber**
- Interactive globe visualization on the contact page
- Custom model imports with realistic lighting and reflections
- Mobile-optimized 3D rendering for all devices

### 🎯 Smooth Animations & Interactions
- Page transitions and scroll-triggered animations powered by **Framer Motion**
- Dynamic hover effects, micro-animations, and loading states
- Typewriter text effects and card spotlight interactions

### 📄 Integrated Resume Viewer
- In-browser PDF resume viewer using **react-pdf-viewer**
- Responsive scaling across desktop and mobile devices
- Dark-themed viewer matching the portfolio aesthetic

### 🏆 Certifications Showcase
- Professional certifications from **IBM**, **DeepLearning.AI**, **Coursera**, and **Forage**
- Credential verification links for each certificate
- Animated card grid with hover effects

### 📊 GitHub Integration
- Real-time repository statistics, contribution graphs, and activity timelines
- Automatic showcase of pinned repositories
- Optimized API calls with token authentication and rate-limit handling

### 📨 Contact Form
- Fully functional contact form with **Nodemailer** integration
- Secure, encrypted email transmission
- Interactive globe background for visual appeal

### 🌐 Progressive Web App (PWA)
- Installable as a native app on desktop and mobile
- Offline functionality with caching strategies
- Automatic updates for the latest version

### ⚡ Performance & SEO
- Optimized for **Lighthouse** scores in Performance, SEO, Best Practices, and Accessibility
- Semantic HTML with proper heading hierarchy and meta tags
- Auto-generated sitemap and structured data (JSON-LD)

---

## 🛠 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15, React 19, TypeScript 5 |
| **Styling** | Tailwind CSS 4, Framer Motion |
| **3D Graphics** | Three.js, React Three Fiber, React Three Drei |
| **UI Components** | Radix UI, Tabler Icons, Recharts |
| **Email** | Nodemailer |
| **Deployment** | Vercel |
| **Analytics** | Vercel Analytics, Vercel Speed Insights |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ installed
- **npm** or **pnpm** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mohhdmufeed/portfolioo.git
   cd portfolioo
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory (you can copy `.env.example`):
   ```env
   SENDER_EMAIL=your_sender_email@gmail.com
   NODEMAILER_PASSKEY=your_16_character_google_app_password
   RECEIVER_EMAIL=your_destination_email@gmail.com
   NEXT_PUBLIC_GITHUB_TOKEN=your_github_api_token
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser** at `http://localhost:3000`

---

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── certificates/       # Certifications page
│   ├── contact/            # Contact page
│   ├── experience/         # Work experience timeline
│   ├── open-source/        # GitHub & open-source stats
│   ├── projects/           # Project showcase
│   ├── resume/             # PDF resume viewer
│   └── stack/              # Tech stack overview
├── components/             # Reusable React components
│   └── ui/                 # UI primitives (buttons, cards, etc.)
├── constants/              # Site content & configuration
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities & services
├── public/assets/          # Images, icons, and static files
├── style/                  # Global CSS & animation styles
└── types/                  # TypeScript type definitions
```

---

## 🔧 Environment Variables

| Variable | Description |
|----------|-------------|
| `SENDER_EMAIL` | Email address used to send contact form messages |
| `NODEMAILER_PASSKEY` | App password or API key for email service |
| `RECEIVER_EMAIL` | Email address to receive contact form submissions |
| `NEXT_PUBLIC_GITHUB_TOKEN` | GitHub personal access token for API requests |

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Built with ❤️ by [Mohammed Mufeed](https://github.com/mohhdmufeed)**

[![GitHub](https://img.shields.io/badge/GitHub-mohhdmufeed-181717?style=for-the-badge&logo=github)](https://github.com/mohhdmufeed)
[![Email](https://img.shields.io/badge/Email-mohhdmufeed%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mohhdmufeed@gmail.com)

</div>
