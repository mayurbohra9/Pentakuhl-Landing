# Pentakuhl Landing Page

A modern React + Vite landing page for Pentakuhl, featuring responsive design, smooth scrolling, and optimized performance.

## Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Setup Steps

1. **Clone/Extract the repository**
   ```bash
   cd pentakuhl-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Running the Project

### Development Server
```bash
npm run dev
```
Starts the Vite dev server at `http://localhost:5173` with Hot Module Replacement (HMR) for instant updates during development.

### Build for Production
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder.

### Preview Build
```bash
npm run preview
```
Locally preview the production build before deployment.

### Lint Code
```bash
npm run lint
```
Run ESLint to check for code quality issues.

## Dependencies

### Production Dependencies
- **React** (^19.2.6): Core library for building UI components
- **React DOM** (^19.2.6): DOM rendering for React components
- **React Icons** (^5.6.0): Icon library for UI elements

### Dev Dependencies
- **Vite** (^8.0.12): Fast build tool and dev server
- **Tailwind CSS** (^4.3.0): Utility-first CSS framework
- **ESLint** (^10.3.0): Code quality and linting
- **@vitejs/plugin-react** (^6.0.1): Fast Refresh plugin for Vite

## Approach

The project is structured as a component-based landing page with:

- **Component Organization**: Modular, reusable components for different sections (Hero, Services, About, etc.)
- **Styling**: Tailwind CSS for responsive, utility-first design
- **State Management**: Local component state with React hooks
- **Performance**: Vite's fast refresh and optimized bundling
- **Content Management**: Centralized content data in `data/siteContent.js` for easy updates

## Assumptions

1. **Modern Browser Support**: Uses ES6+ JavaScript (no IE11 support)
2. **Node.js Availability**: Development requires Node.js v18+
3. **Static Content**: Page content is primarily static (defined in `siteContent.js`)
4. **Client-Side Rendering**: No server-side rendering (CSR approach)
5. **CSS Framework**: Assumes Tailwind CSS knowledge for styling customization

## AI Usage

Minimal AI usage - primarily manual development with minimal AI assistance for:
- Basic component boilerplate structure
- Minor styling suggestions

---

Currently, two Vite React plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)
