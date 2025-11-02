# Great Music LLM - Landing Page

A sophisticated, high-end landing page for Great Music LLM, an elite orchestra-focused business. Built with React, Vite, and Tailwind CSS.

## 🎻 About the Project

This landing page was created as part of BC Digital's Frontend Coding Challenge. It showcases a premium orchestral ensemble through an elegant, responsive design that emphasizes sophistication and artistic excellence.

## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Scroll-to-section functionality with active state tracking
- **Interactive Elements**: Hover effects, transitions, and animations throughout
- **Mobile Menu**: Hamburger menu for seamless mobile navigation
- **Contact Form**: Functional inquiry form with state management
- **Modern Tech Stack**: Built with React 18, Vite, and Tailwind CSS

## 🎨 Sections

1. **Hero Section** - Striking headline with call-to-action buttons
2. **About Section** - Company legacy and achievement statistics
3. **Services Section** - Four key service offerings
4. **Ensemble Section** - Featured musicians and their roles
5. **Events Section** - Upcoming performances
6. **Contact Section** - Contact information and inquiry form
7. **Footer** - Branding and copyright information

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd great-music-llm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS v3** - Utility-first CSS framework
- **Lucide React** - Icon library
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

This project is deployed on Vercel. To deploy your own version:

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite settings
4. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

## 🎯 Design Decisions

### Color Scheme
- **Primary**: Dark slate (950-900) for sophistication
- **Accent**: Amber/Gold (400-500) for luxury and elegance
- **Text**: Slate gray tones for readability

### Typography
- **Headings**: Serif fonts (Georgia) for classical elegance
- **Body**: Sans-serif for modern readability
- **Tracking**: Wide letter-spacing for premium feel

### Layout Philosophy
- Clean, spacious sections with ample padding
- Gradient backgrounds for depth
- Subtle borders and hover effects
- Mobile-first responsive approach

## 📝 Key React Concepts Used

- **useState** - Managing menu state, form data, and active sections
- **useEffect** - Handling scroll events and active section detection
- **Event Handling** - Click handlers for navigation and form submission
- **Conditional Rendering** - Mobile menu visibility
- **Component Props** - Mapping data arrays to UI elements

## 🔧 Customization

### Update Content

Edit the data arrays in `App.jsx`:

```javascript
const musicians = [...];  // Ensemble members
const services = [...];   // Service offerings
const upcomingEvents = [...];  // Event schedule
```

### Modify Colors

Update Tailwind classes or extend the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors
    }
  }
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is part of a coding challenge submission for BC Digital.

## 👨‍💻 Developer

Created for BC Digital's Frontend Developer position application.

