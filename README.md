


# React Atomic Boilerplate 
## Steps
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```
npx create-react-app react-atomic-boilerplate --typescript --use-npm
```
1. Set project directory structure - [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) compatible
2. Add [Storybook](https://storybook.js.org/)
3. Add [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
4. Mock basic view
5. Create Models (and mock data services)
6. Add [MobX](https://mobx.js.org/) - using [react-mobx-lite](https://github.com/mobxjs/mobx-react-lite) with [hooks](https://mobx-react.js.org/libraries)
7. Add [axios](https://github.com/axios/axios) (and replace mock data services to actual requests to [API](https://jsonplaceholder.typicode.com/))
8. Add [Material-UI](https://material-ui.com/) (and set theme)

### Set project directory structure
Src directory content:
```
.
+-- assets          // images, icons, audio atc.
+-- components      // internal components (anything other than page component)
|   +-- atoms
|   +-- molecules
|   +-- organisms
|   +-- templates
+-- hooks           // common reusable hooks 
+-- models          // typescript interfaces and classes
+-- pages           // page components
+-- services        // REST API, websocket, storage ect.
+-- store           // MobX stores
+-- style           // css-in-js code and wrappers
|   +-- _globals.ts // sizes, colors etc. - can be divided as project grow
|   +-- theme.ts
+-- utils
+-- App.tsx
+-- index.html
+-- index.css      // global styles (like fonts or reset/normalize css code)
```

## Learn More about React
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
