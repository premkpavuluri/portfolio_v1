# Personal Portfolio Website

A modern, responsive portfolio website built with React to showcase my skills, experience, and projects. This website serves as both a professional showcase and a practical application of my React development skills.

## 🎯 Motivation

I always wanted to build my own portfolio where I can showcase my skills and journey. At the same time, I wanted to apply my learnings, so I built my own portfolio. This project represents my passion for web development and demonstrates my ability to create modern, user-friendly applications using React.

## ✨ Features

- **Responsive Design**: Mobile-first approach with smooth transitions
- **Modern UI/UX**: Clean, professional design with dark theme
- **Dynamic Navigation**: Smooth scrolling between sections
- **Interactive Components**: Hover effects and animations
- **Social Media Integration**: Direct links to professional profiles
- **Project Showcase**: Detailed project descriptions with live links
- **Skills Visualization**: Interactive skill cards with icons
- **Experience Timeline**: Professional journey presentation

## 🛠️ Technology Stack

- **Frontend**: React 18.3.1
- **Styling**: Styled Components (CSS-in-JS)
- **Build Tool**: Create React App
- **Icons**: Custom SVG icons
- **Deployment**: Ready for deployment on any static hosting platform

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # Personal introduction
│   ├── Header.jsx      # Navigation header
│   ├── Skills.jsx      # Skills showcase
│   ├── Experience.jsx  # Work experience
│   ├── Projects.jsx    # Project portfolio
│   ├── Contact.jsx     # Contact information
│   └── Footer.jsx      # Footer section
├── styles/             # Styled components
│   └── PortfolioComponents.jsx
├── hooks/              # Custom React hooks
│   ├── useScreenWidth.jsx
│   └── useIcon.jsx
├── config/             # Application configuration
│   └── Config.js
└── assets/             # Static assets
    ├── icons/          # SVG icons
    └── images/         # Project images
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/premkpavuluri/portfolio_react.git
   cd portfolio_react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Personal Information
Update your personal information in `src/config/Config.js`:
- Name and contact details
- About me description
- Skills and experience
- Project information
- Social media links

### Styling
Modify the theme colors in `src/App.css`:
```css
:root {
    --primary-background-color: #101825;
    --secondary-background-color: #1f1f1f;
    --primary-color: #1973c8;
    --text-color: #c2c1c1;
}
```

### Icons
Add new icons to `src/assets/icons/` and register them in `src/hooks/useIcon.jsx`.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 481px - 1023px
- **Mobile**: 480px and below

## 🔧 Key Features Implementation

### Dynamic Icon System
- Custom hook for icon management
- Fallback handling for missing icons
- SVG optimization

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with sidebar
- Active section highlighting

### Smooth Scrolling
- Section-based navigation
- Smooth scroll behavior
- Active section tracking

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build files to S3 bucket

## 📊 Performance

- Optimized bundle size
- Lazy loading for images
- Efficient re-renders
- CSS-in-JS optimization

## 👨‍💻 About Me

I'm a passionate Full-Stack developer with 4+ years of experience, currently working at ThoughtWorks. I love working on projects that help me grow and always keen to learn new technologies.

### Connect with Me
- **GitHub**: [premkpavuluri](https://github.com/premkpavuluri)
- **LinkedIn**: [Prem Kumar Pavuluri](https://www.linkedin.com/in/pavuluri-prem-kumar-a20381191/)
- **Email**: premkumarpavuluri@gmail.com

---

**Built with ❤️ using React and Styled Components**
