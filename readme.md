# Build Tool Showcase

## Objective
Create a small web application that demonstrates the use of various build tools and package managers. This project will help assess your understanding of build processes, dependency management, and basic web development concepts.

## Project Requirements
1. **Set up a project using npm as the package manager**
2. **Create a simple web application with the following features:**
    - A header with a title
    - A content area that displays a list of popular build tools from a JSON file
    - A footer with a copyright notice
3. **Use Webpack as the main build tool**
4. **Implement the following:**
    - Use ES6+ JavaScript features
    - Use Sass for styling
    - Implement at least one external JavaScript library (e.g., lodash, moment)
    - Create a development and a production build configuration
5. **Use Babel to ensure browser compatibility**
6. **Implement source maps for easier debugging**
7. **Set up a local development server using webpack-dev-server**
8. **Create npm scripts for various tasks:**
    - Start the development server
    - Create a production build
    - Run linting (use ESLint)
    - Run tests (use Jest for a simple test)
9. **Optimize the production build:**
    - Minify JavaScript and CSS
    - Implement code splitting for the external library
10. **Add unit tests for all the functions**

## Project Structure
```
/build-tool-showcase
├── dist
├── node_modules
├── src
│   ├── assets
│   │   └── styles
│   │       └── main.scss
│   ├── data
│   │   └── build-tools.json
│   ├── js
│   │   ├── index.js
│   │   └── utils.js
│   ├── tests
│   │   └── utils.test.js
│   └── index.html
├── .babelrc
├── .eslintrc.json
├── jest.config.js
├── package.json
├── webpack.common.js
├── webpack.dev.js
└── webpack.prod.js
```

## Implementation Details

### 1. Project Setup
- Initialized the project using `npm init`.
- Installed necessary dependencies: Webpack, Babel, Sass, ESLint, Jest, lodash, and webpack-dev-server.

### 2. Web Application Features
- **Header**: Contains a title.
- **Content Area**: Displays a list of popular build tools fetched from a JSON file (`build-tools.json`).
- **Footer**: Contains a copyright notice.

### 3. Webpack Configuration
- Configured Webpack for both development and production environments.
- Used `webpack.common.js` for common configurations.
- Used `webpack.dev.js` for development-specific configurations.
- Used `webpack.prod.js` for production-specific configurations.

### 4. ES6+ JavaScript and Sass
- Utilized modern JavaScript features in `index.js` and `utils.js`.
- Styled the application using Sass (`main.scss`).

### 5. Babel Configuration
- Configured Babel using `.babelrc` to ensure compatibility with older browsers.

### 6. Source Maps
- Enabled source maps in Webpack configurations for easier debugging.

### 7. Development Server
- Set up a local development server using `webpack-dev-server`.

### 8. npm Scripts
- **Start Development Server**: `npm run serve`
- **Create Production Build**: `npm run build:prod`
- **Run Linting**: `npm run lint`
- **Run Tests**: `npm run test`

### 9. Production Build Optimization
- Minified JavaScript and CSS.
- Implemented code splitting for the external library (lodash).

### 10. Unit Tests
- Added unit tests for all functions in `utils.js` using Jest.

## How to Run the Project
1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm run start`
4. Create a production build: `npm run build:prod`
5. Run linting: `npm run lint`
6. Run tests: `npm run test`

## Conclusion
This project demonstrates the use of various build tools and package managers in a simple web application. It covers essential aspects of modern web development, including dependency management, build processes, and code optimization.
