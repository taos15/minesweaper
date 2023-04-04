#Vite template

## Technologies

![React](https://img.shields.io/badge/frontend-react-61DBFB?style=flat&logo=react)
![Tailwind](https://img.shields.io/badge/frontend-tailwind-00C4C4?style=flat&logo=tailwindcss)
![ESLint](https://img.shields.io/badge/linter-eslint-4B32C3?style=flat&logo=eslint)
![Prettier](https://img.shields.io/badge/formatter-prettier-F8BC45?style=flat&logo=prettier)
![Vitest](https://img.shields.io/badge/specs-vitest-yellow?style=flat&logo=vitest)
![Vite](https://img.shields.io/badge/build-vite-A855F7?style=flat&logo=vite)

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Vite](https://vitejs.dev/) to build the project for development or production
- [Husky 🐶](https://typicode.github.io/husky/) runs the full list of specs before committing your changes to ensure that you have a green build

## Features

- Optimized for serverless deployment to CDN edge locations (Cloudflare Workers)
- HTML page rendering (SSR) at CDN edge locations, all ~100 points on Lighthouse
- Hot module replacement during local development using React Refetch
- Pre-configured with CSS-in-JS styling using Emotion.js
- Pre-configured with VSCode code snippets and other VSCode settings
- The ongoing design and development is supported by these wonderful companies:

## Development

### Setup

1. Clone the repository or use `npx degit user/project my-project`(make sure you have degit installed)
2. Run `pnpm install` to install all of the project's dependencies
3. Build the project for production: `pnpm run build`
4. Run the local development server: `pnpm run dev`
