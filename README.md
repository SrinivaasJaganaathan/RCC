# Rotaract Club of Chennai Celebrities Website

A modern, responsive website for the Rotaract Club of Chennai Celebrities built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Vibrant color palette with smooth animations and parallax effects
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging animations
- **Five Main Sections**:
  - Hero section with parallax background
  - About Us with leadership team and club statistics
  - Signature Projects showcase
  - Events calendar and photo gallery
  - Contact form with Instagram feed integration
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessibility**: WCAG compliant with proper semantic HTML and keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rotaract-chennai-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
rotaract-chennai-website/
├── public/
│   ├── vite.svg
│   └── favicon.ico
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   ├── index.css        # Global styles and animations
│   └── vite-env.d.ts    # TypeScript declarations
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite build configuration
└── README.md           # Project documentation
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Design System

### Color Palette
- **Primary Purple**: #8B5CF6
- **Accent Coral**: #FF6B6B
- **Secondary Teal**: #06D6A0
- **Complementary**: Blues and oranges for variety

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable fonts with proper line spacing
- **Interactive Elements**: Hover states and transitions

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Smooth scroll with active states

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deployment

### Netlify (Recommended)

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to Netlify
   - Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json scripts:
```json
"homepage": "https://yourusername.github.io/rotaract-chennai-website",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

3. Deploy:
```bash
npm run deploy
```

## 🔧 Customization

### Updating Content

1. **Club Information**: Edit the content in `src/App.tsx`
2. **Images**: Replace image URLs with your own (currently using Pexels stock photos)
3. **Colors**: Modify the color scheme in `tailwind.config.js`
4. **Animations**: Customize animations in `src/index.css`

### Adding New Sections

1. Create new section in `src/App.tsx`
2. Add navigation link to the header
3. Update scroll detection logic
4. Add corresponding styles

## 📸 Image Guidelines

- **Hero Background**: 1920x1080px minimum
- **Project Images**: 500x300px recommended
- **Gallery Images**: 600x400px recommended
- **Team Photos**: 300x300px (square format)
- **Event Images**: 400x250px recommended

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: chennaiceleb@rotaract.org
- Phone: +91 98765 43210
- Address: T. Nagar, Chennai, Tamil Nadu

## 🙏 Acknowledgments

- **Rotaract International** for the inspiration and community spirit
- **Pexels** for providing high-quality stock photos
- **Lucide React** for beautiful icons
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool and development server

---

**Built with ❤️ for the Rotaract Club of Chennai Celebrities**
