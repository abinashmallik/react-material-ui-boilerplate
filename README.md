# react-material-ui-boilerplate

## Tech Stack

1.  React

## Getting Started

Clone the repository

```
git clone https://github.com/abinashmallik/react-material-ui-boilerplate.git
```

switch to root directory

```
cd react-boilerplate
```

Install the dependencies

```
npm install
```

Start the server

```
npm start
```

> Note: It automatically opens default browser at URL http://localhost:3000. To change the default port configure the webpack

## Run the Test

```
npm test
```

> Note: Launches the test runner in the interactive watch mode.

## Run the Build

```
npm run build
```

> Note: Builds the app for production to the build folder. It correctly

bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

## Eject the application

```
npm run eject
```

> Note: this is a one-way operation. Once you eject, you can’t go back! If you aren’t satisfied with the build tool and
> configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

## Features

- Pre-configured ENV variables
- Industry level CSS framework
- Run Unit test with Jasmine
- Login component sample
- Responsiveness
- Debug mode disabled in production
- Proper Folder structure
- React Routing Enabled
- Theming

## Folder Structure

```
|   node_modules
+   public
|   -index.html (main html file responsible for rendering)
+   src
|   + assests
|   + images (static image folder)
|   + components (container for all re-usable components)
|   - AppBar.js (appbar)
|   - BreadCrumbs.js (breadcrumbs)
|   - Dialog.js (modal)
|   - ExpansionPanel.js (expansion panel component)
|   - Footer.js (footer)
|   - ImageCard.js (simple card with image)
|   - Login.js (sample login component)
|   - PaginatedTables.js (table supporting client side pagination)
|   - Slider (horizontal sliders)
|   - Stepper.js (horizontal stepper)
|   - Tabs (tabs)
|   + pages (container for each page)
|   + home (home page container)
|   - index.js (home page js file)
|   + routes (container for all routes)
|   - AppRoutes.js (contains all the routes)
|   - App.css (css file for App component)
|   - App.test.js (unit test file for App component)
|   - index.css (css file for index.js)
|   - serviceWorker.js (service worker file used for offline support)
|   - theme.js (theming file)
|   - index.js (main wrapper file for App component)

```

## Roadmap

- Redux
- Story Book
- Realtime API with redux and axios
- GraphQL
- Deployment
- Docker
