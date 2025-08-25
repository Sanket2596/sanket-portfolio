# Sanket Mungikar - Portfolio Website

A beautiful, modern portfolio website built with Next.js, featuring smooth animations, dark/light mode toggle, and responsive design.

## ✨ Features

- **Modern Design**: Sleek, professional design with glass morphism effects
- **Dark/Light Mode**: Beautiful theme toggle with system preference detection
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized with Next.js 14 and modern React patterns
- **SEO Ready**: Proper meta tags and Open Graph support

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🎨 Sections

1. **Hero**: Animated introduction with floating particles
2. **About**: Personal information and education
3. **Skills**: Technical skills with progress bars
4. **Experience**: Work experience timeline
5. **Projects**: Featured projects showcase
6. **Contact**: Contact form and information

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sanketmungikar/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your portfolio repository

3. **Configure Project**:
   - Framework Preset: Next.js
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)

4. **Environment Variables**: No additional environment variables needed for this project

5. **Deploy**: Click "Deploy" and wait for the build to complete

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Follow the prompts** to configure your deployment

### Option 3: Deploy via GitHub Integration

1. **Enable GitHub Integration** in your Vercel dashboard
2. **Connect your repository**
3. **Automatic deployments** will be triggered on every push to main branch

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, title, description
- `components/About.tsx` - Personal info and education
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project details
- `components/Contact.tsx` - Contact information

### Colors and Theme
Modify `tailwind.config.js` to customize:
- Primary colors
- Secondary colors
- Accent colors
- Custom animations

### Styling
Update `app/globals.css` for:
- Global styles
- Theme-specific styles
- Custom CSS classes

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎭 Animations

All animations are powered by Framer Motion:
- **Page Transitions**: Smooth section transitions
- **Scroll Animations**: Elements animate on scroll
- **Hover Effects**: Interactive hover animations
- **Loading States**: Beautiful loading screen

## 🌓 Theme System

The portfolio includes a sophisticated theme system:
- **Dark Mode**: Default dark theme
- **Light Mode**: Clean light theme
- **System Preference**: Automatically follows OS theme
- **Persistent**: Theme choice is saved in localStorage

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Bundle Size**: Optimized with Next.js
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting

## 🔒 Security

- **TypeScript**: Type-safe development
- **ESLint**: Code quality and security
- **Next.js Security**: Built-in security features

## 📈 Analytics (Optional)

To add analytics, you can integrate:
- Google Analytics
- Vercel Analytics
- Plausible Analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📞 Contact

- **Email**: sanketmungikar25@gmail.com
- **Phone**: +1 (714) 488-4098
- **Location**: Livermore, CA
- **LinkedIn**: [sanketmungikar](https://linkedin.com/in/sanketmungikar)
- **GitHub**: [sanketmungikar](https://github.com/sanketmungikar)

---

Built with ❤️ by Sanket Mungikar
