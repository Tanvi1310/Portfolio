# Tanvi Gholap - Profile Portfolio

A modern, fully responsive personal profile webpage built with **React**, **HTML5**, **CSS3**, and **JavaScript**. This portfolio showcases Tanvi Gholap's expertise as a Full Stack Developer and AI/ML fresher, featuring projects, skills, and professional experience.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **React Components**: Modular, reusable component structure
- **Interactive Elements**: Smooth scrolling navigation, contact form with validation
- **Performance Optimized**: Fast loading and smooth interactions
- **Customizable**: Easy to modify content, colors, and styling

## 📋 Sections

1. **Header/Navigation** - Sticky header with responsive mobile menu
2. **Hero Section** - Eye-catching introduction with call-to-action buttons
3. **About** - Personal introduction with statistics and highlights
4. **Skills** - Categorized technical skills with badges
5. **Projects** - Showcase of featured projects with hover effects
6. **Contact** - Contact information and functional contact form
7. **Footer** - Links and copyright information

## 🛠️ Tech Stack

- **React** 18.2.0 - Frontend library
- **HTML5** - Semantic markup
- **CSS3** - Responsive styling with Flexbox and Grid
- **JavaScript** - Interactive functionality
- **React Scripts** - Build and development tools

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd "20th July"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The application will open in your browser at `http://localhost:3000`

## 🚀 Available Scripts

### Development
```bash
npm start
```
Runs the app in development mode with hot reload.

### Build
```bash
npm build
```
Creates an optimized production build.

### Testing
```bash
npm test
```
Runs the test suite.

## 📝 Customization

### Updating Profile Information

#### In [src/components/HeroSection.js](src/components/HeroSection.js)
- Change your name, tagline, and description
- Update profile image URL
- Modify call-to-action buttons

#### In [src/components/About.js](src/components/About.js)
- Update your bio and experience details
- Modify statistics (years, projects, clients)
- Update highlight cards

#### In [src/components/Skills.js](src/components/Skills.js)
- Add/remove skills in the `skills` object
- Modify skill categories

#### In [src/components/Projects.js](src/components/Projects.js)
- Add/remove projects in the `projects` array
- Update project images, descriptions, and tags

#### In [src/components/Contact.js](src/components/Contact.js)
- Update contact information (email, phone, location)
- Update social media links
- Integrate form submission backend

### Styling Customization

Edit the CSS files to customize:
- Colors: Modify CSS variables in [src/index.css](src/index.css)
- Fonts: Update font-family properties
- Spacing: Adjust padding and margins
- Animations: Modify transition effects

#### Color Theme (in [src/index.css](src/index.css))
```css
:root {
  --primary-color: #1e40af;
  --secondary-color: #3b82f6;
  --text-dark: #1f2937;
  --text-light: #6b7280;
  --bg-light: #f9fafb;
  --bg-white: #ffffff;
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

All styles are optimized for these breakpoints.

## 🔗 Connecting to Backend

The contact form currently logs data to the console. To connect to a backend:

1. Update the `handleSubmit` function in [src/components/Contact.js](src/components/Contact.js)
2. Integrate with your backend API:
   ```javascript
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

## 🎨 Project Structure

```
src/
├── components/
│   ├── Header.js & Header.css
│   ├── HeroSection.js & HeroSection.css
│   ├── About.js & About.css
│   ├── Skills.js & Skills.css
│   ├── Projects.js & Projects.css
│   ├── Contact.js & Contact.css
│   └── Footer.js & Footer.css
├── App.js & App.css
├── index.js & index.css
public/
├── index.html
package.json
```

## 💡 Tips for Enhancement

- Add animations with Framer Motion
- Implement dark mode toggle
- Add a blog section
- Integrate with CMS
- Add image optimization
- Implement SEO improvements
- Add progressive web app (PWA) features
- Implement analytics

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork, modify, and customize this template for your own portfolio!

## 📞 Support

For issues, questions, or suggestions, please open an issue or contact the project owner.

---

**Happy coding! 🎉**
