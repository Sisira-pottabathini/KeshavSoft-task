Project Overview
This project recreates the Bootstrap 5 website from Task 1 using the mandated technology stack of Vite (bundler) and Nunjucks (templating engine). The website features a responsive three-page layout with modern design elements.

Technology Stack
Templating Engine: Nunjucks

Bundler: Vite

CSS Framework: Bootstrap 5

Icons: Bootstrap Icons

Build Tool: Node.js + Custom Build Script

Project Structure
src/
├── templates/           # Nunjucks template files
│   ├── base.njk        # Base layout template
│   ├── index.njk       # Home page
│   ├── about.njk       # About page
│   └── contact.njk     # Contact page
└── assets/
    ├── css/
    │   └── style.css   # Custom styles
dist/                   # Compiled output (auto-generated)
build.js               # Custom build script for Nunjucks
vite.config.js         # Vite configuration
package.json           # Project dependencies
README.md              # Project documentation
Installation & Setup
Prerequisites
Node.js (version 14 or higher)

npm package manager

Installation Steps
Install dependencies:
npm install

Build the project:
npm run build

Start development server:
npm run dev

Preview production build:
npm run preview

Available Commands
npm run build 

npx serve dist

Features Implemented
Responsive Bootstrap 5 layout

Three-page website (Home, About, Contact)

Nunjucks templating for code reuse

Vite bundler configuration

Professional folder structure

Custom CSS styling

Mobile-friendly design

Interactive navigation

Contact form layout

Social media integration

Pages
Home - Hero section, services overview, call-to-action

About - Company story, values

Contact - Contact information, contact form

Build Process
The build process:
Compiles Nunjucks templates into static HTML
Processes custom CSS and JavaScript
Generates optimized production files in /dist folder
Maintains Bootstrap 5 CDN dependencies