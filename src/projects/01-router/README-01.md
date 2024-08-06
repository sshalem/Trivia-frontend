#### Router

In this project I define the Router with pages for each subject

In this project I setup the router with pages. </br>
Subjects in this project

1. setup Router in `App.jsx`
2. setup pages + `index.js` file in it
3. setup `App.jsx` with `children` + `MainLayout` with `Outlet` component
4. setup `Navbar` in `MainLayout` page
5. setup new `Route` with `parameter` + new Page `Question`

<!-- ############################################################################ -->
<!-- ############################################################################ -->

#### 1. setup Router in App.jsx

- Setup `App.jsx` with router imports
- import both `createBrowserRouter, RouterProvider` from `react-router-dom`

```js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
```

<!-- ############################################################################ -->
<!-- ############################################################################ -->

#### 2. setup pages

- create Pages folder and setup the pages I want
- create an `index.js` and export them in it all the pages
- I created the following pages

1. MainLayout
2. English
3. Hebrew
4. History
5. Error

- This is `index.js` where I export all from `pages` folder and I could import the from `pages` folder

```js
export { default as MainLayout } from './MainLayout';
export { default as Error } from './Error';
export { default as English } from './English';
export { default as Hebrew } from './Hebrew';
export { default as History } from './History';
```

- This is a basic Page setup for all pages , as a starter

```js
import React from 'react';

const Hebrew = () => {
  return <h1>Hebrew</h1>;
};

export default Hebrew;
```

<!-- ############################################################################ -->
<!-- ############################################################################ -->

#### 3. setup `App.jsx` with `children` + `MainLayout` with `Outlet` component

1. `MainLayout` - define it as my Root page (the main page When I browse localhost:5173)
   All other pages will be define as children of it
2. Since I want all the pages data to be displayed under the `MainLayout` url , thus I need to add `Outlet`
3. `Outlet` - Add in `MainLayout` , the Outlet Component

- Note : </br>
  This way I will have to browse and change the url (for eample `/english` , `/hebrew`)

(In step 4 , I will define a Navbar)

```js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, MainLayout, English, Hebrew, History } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/english',
        element: <English />,
      },
      {
        path: '/hebrew',
        element: <Hebrew />,
      },
      {
        path: '/history',
        element: <History />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
```

In `MainLayout` I add the `Outlet` component, this way I will see data of each page when I type the URL in the url field

```js
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <h1>MainLayout</h1>
      <Outlet />
    </>
  );
};

export default MainLayout;
```

<!-- ############################################################################ -->
<!-- ############################################################################ -->

#### 4. setup `Navbar` in `MainLayout` page

- So far, we have pages , and we can browse to each page by type the url , in the url field.
- Now, I will setup a `Navbar` that will do this by clicking on links that will be on the `MainLayout` page

1. Create a `components` folder
2. create a `index.js` file, in components folder (to export all componet in a clean manner)
3. create `Navber` component
4. Add `Navbar` to `MainLayout`

```js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/english">English</NavLink>
        <NavLink to="/hebrew">Hebrew</NavLink>
        <NavLink to="/history">History</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
```

- In `MainLayout` I add `Navbar`
- Now I can go between pages w/o the need of typing the url

```js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const MainLayout = () => {
  return (
    <>
      <h1>MainLayout</h1>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
```

#### 5. setup new `Route` with `parameter` + new Page `Question`

Now I will add another `Route` nested `parameter` in the url. </br>
I add path of `english/:parameter` , which means I will be directed to:

- Page of `Question` with url of `english/1`

On the page `English` , I setup `NavLink` to direct to that url

- `App.jsx`

```js
      {
        path: 'english',
        element: <English />,
      },
      {
        path: 'english/:parameter',
        element: <Question />,
      },
```

- `English.jsx`

```js
<div>
  <NavLink to={`/english/1`}>Question 1</NavLink>
</div>
```
