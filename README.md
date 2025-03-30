# Mark Anthony Navarro Portfolio

This is a professional portfolio website for Mark Anthony Navarro, an AI Automation Developer.

## 🚀 Features

- Responsive design with Next.js and Tailwind CSS
- Dark/light mode support
- SEO optimized with proper metadata and structured data
- Performance optimized with effective caching strategies
- Comprehensive portfolio showcase
- Optimized for Vercel deployment

## 📋 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **Deployment**: Vercel

## 🚦 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm 9.0.0 or later

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/mark-portfolio.git
cd mark-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔄 Build and Deployment

### Local Build

```bash
npm run build
npm run start
```

### Analyze Bundle

```bash
npm run build:analyze
```

### Check Bundle Sizes

```bash
npm run bundle-check
```

### Deployment to Vercel

This project is optimized for deployment on Vercel. The following files help optimize the deployment:

- `next.config.mjs` - Configures Next.js with optimal settings
- `vercel.json` - Contains Vercel-specific optimizations
- `public/robots.txt` - Properly configured for search engines
- `app/sitemap.ts` - Generates a sitemap for better SEO

#### Deploy with Vercel CLI

1. Install the Vercel CLI

```bash
npm i -g vercel
```

2. Deploy

```bash
vercel
```

#### Deploy with Vercel Dashboard

1. Push your code to GitHub
2. Import the project in the Vercel dashboard
3. Configure the project settings
4. Deploy

## 🧰 Optimization Details

This portfolio is extensively optimized for production:

### Performance Optimizations

- Image optimization with next/image
- Font optimization with next/font
- Static asset caching with Cache-Control headers
- Code splitting and tree shaking
- Bundle size optimization
- Removal of unused components and code

### SEO Optimizations

- Comprehensive metadata
- Structured data for better search engine understanding
- Sitemap generation
- Properly configured robots.txt
- Optimized Open Graph and Twitter card tags

### Security Optimizations

- Secure headers configuration
- Content Security Policy
- Proper CORS settings
- XSS protection

## 📚 Folder Structure

```
├── app/              # App router pages
├── components/       # React components
├── public/           # Static assets
├── scripts/          # Utility scripts
└── styles/           # Global styles
```

## 🧠 SEO Strategy

The portfolio implements several SEO best practices:

1. **Metadata**: Each page has appropriate meta tags
2. **Structured Data**: JSON-LD for person information
3. **Sitemap**: Auto-generated sitemap
4. **Performance**: Fast load times improve SEO ranking
5. **Mobile Friendly**: Responsive design for all devices
6. **Semantic HTML**: Proper HTML structure for accessibility

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Mark Anthony Navarro**

- Website: [https://markanthonynavarro.dev](https://markanthonynavarro.dev)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/username)
- GitHub: [GitHub Profile](https://github.com/username)
