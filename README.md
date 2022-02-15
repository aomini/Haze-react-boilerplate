# React Boiler Plate

This project contains boiler plate of react for @hazesoft.co. It is created with the best practices, structure and tech stack in mind so that you can handle all of the problems and integration easily. Remaining integration with new tech stacks should be discussed first before implementation. Every hazesoft project must use one of the boiler plates available in the repository.

Currently, there are two boiler plates for react one is with-typescript (branch-main) and another is without-typescript (branch-without-ts). If you are comfortable with typescript use the branch-main (highly recommended) if you are not then use branch-without-ts.

## Libraries used in the boilerplate:

1. react
2. react-dom
3. react-router-dom
4. typescript
5. redux-toolkit
6. clsx

## Libraries integration on the future

> This libraries are not currently integrated on the boilerplate because lot of the developers are not quite comfortable or haven't worked with them. But this libraries are necessary to implement because of the benefits they provide. If you don't know how to use them please start learning them in order as this will be someday integrated on the primary boilerplate.

1. storybook
2. jest
3. react-testing-library
4. cypress
5. tailwindcss

## For DX (Developer's eXperience)

> We are also concern about the comfortabilty, adjustment, & effectiveness of developers while working on this boiler plate. So, we have configured and added few things to help you.

1. eslint
2. prettier
3. Proper structure
4. Basic examples
5. Documentation
6. Recommendated extensions & settings for vscode.
7. React-rewired to override settings and maintain aliases. [TODO]

## Installation

- Clone the project locally through `git clone`.
- Then navigate to the project directory.
- Install the project through `yarn install` command.
- Create `.env` file in the root directory of the project.
- Copy and save the environment variables from `.env.example` file and paste it to `.env` file.
- Now start the project locally through `yarn start` command.

## Demo examples

- Only for demonstration, this project is packaged with json-server. So, to check out the examples run `yarn run server`. This starts a json-server which used the `<root>/.db.json` file for storage.
- Also, start the react server `yarn start` if you haven't started.
- After you're done doing demo's remove the json-server dependency & also remove it's script from package.json.

## DotFiles & configuration files

The project root directory contains configuration and dotfiles.

- .eslintrc contains the eslint configurations and rules.
- .prettierrc is the prettier config file to maintain the consistency of prettier in every developers.
- .vscode contains the vscode configs files best for the project. You can remove this if you don't want or add new things to it.
- .gitignore is list of files/folders for git to ignore.
- db.json is for json-server (required only to view project examples).
- tsconfig.json is the typescript configuration file.

## Project structure

- Every source code should be kept inside of `src/`.
- `app/` contains the application logic & setup of `redux-toolkit`.
- `components/` contains the common components of the project.
- `features/` should contain the feature of pages. So, if you have a page and you have to create a component related to only that page then instead of creating the component inside of `components/` create it in `features/`. Then, import the component inside `pages/`.
- `pages/` should contain the main component used in route `src/routes.tsx`.
- `resources/` should contain the assets, locales, styles etc.
- `types/` should contain the common ts types.
- `utils/` should contain the utilities functions.
- `src/routes.tsx` contains the routing of the project.
- More about the folders inside the component below.

## Asynchronous requests

- If you are not using `redux-toolkit` then only follow other HTTP libraries.
- Donot ❌ use `fetch` api.
- Axios is already setup with `baseURL` and interceptors to handle request and response. So, use the utils axios. Donot define your own axios.
- Prefer `async await` on mutiple asynchronous requests or `promise.then().catch()` is fine which avoids the use of `try-catch` block.

## Static testing with better code standards

Static testing tools helps the developers to write clean & structured codes. They also facilates the team to work with other codes effectively. It also increases the DX(Developers Experience) and code maintainabilty.

For static testing, we have used `prettier` and `eslint`. The developer should turn on their `prettier` & `eslint` tools. All the code should follow all the practices defined by `eslint`. No violation regarding eslint rules. All the codes should be subjected to `prettier` auto format defined by `.prettierrc` config file at the project root directory.

Significant rules to follow with eslint:

- Variables name should be proper. Never use ❌ variable1, variable2 and so on.
- Follow proper casing rules like: `camelCase`, `PascalCase`, `kebab-case`, `lowercase`, `UPPERCASE` and `snake_case`. Don't mix them up.
- Casing should be used precisely ☑️. These are the musts.
  - Variable & functions should always be `camelCase`.
  - Fact constants should be in `UPPERCASE` _example_ `PI`.
  - Project strict constants can also be defined in `UPPERCASE` _example_ `CREATE_ACTION`, `UPDATE_TYPE` etc.
  - Environment variables should always be in `UPPERCASE` _example_ `NODE_ENV, PUBLIC_API` etc.
  - `Class` and `FunctionConstructors` if used should be in `PascalCase`. React components are similar to `Function Constructors` show they should also be used in `PascalCase`.
- Always use arrow functions whenever possible. Arrow functions helps to reduce code, looks great 🏁, easy to debug & we can maintain similar functional code structures.
- Try to avoid `this` pointer as this creates issues depending on the context it's bounded.
- Try to avoid use of `class` components. We'll be writing codes on `functional programming` paradigm. `class` can be used only in error-boundary components. React hugely follows `function programming`. Another big fan of functional programming is `redux`.
- Always priotize to write pure functions. _Principle: Given same input gives same output_. This helps to get same results every time and makes it easy to write unit tests.
- Never ❌ use var on your codes it's the beginning to buggy, logical errors & hard to debug codes.
- Always prefer `const` and `let` but use it wisely. Use `const` when you don't have to update the variable directly (example of indirect update is react useState). Where `let` should be used on variable that might change. Use of `const` saves us from lot of buggy codes so it should be your first preference.
- You should not export react components as a anonymous function. This will result to hard to debug components as react devtools won't be able to figure out the exact name of that components.

  **Example** ❌ Bad!

  ```jsx
  export default () = {}
  ```

  ✅ Good!

  ```jsx
  const Demo = () => {};
  export default Demo;
  ```

- Always prefer pure & declarative functions like `map, filter, reduce` and sometimes `forEach`. Avoid imperative functions like `for, while, do-while`. Also avoid impure function like `slice` using impure function will lead you to unwanted behaviour.
- Objects should have proper keys that define the value.
- Name of the components should always be singular.
- Side-effects that are not part of the components _example asynchronous requests, dom manupulation, browser dependant etc should be handled on useEffect_.
- Components that might or might not render fully should always have fallback states.
- The import orders.
  The import orders should be clean and same in all part of the codebase. Absolute module should always come first then resolved modules `@/components` or `components/` which should be followed by relative `.js`, `.json` and `'.module.(css|scss)` files.

  **Example** ❌ Bad!

  ```jsx
  import Header from '../components/Header';
  import Link from 'next/Link';
  import * as React from 'react';
  import ResolvedComponent from '@/components/ResolvedComponent'; /** module resolution*/
  import '../index.css';
  import Demo from './DemoComponent';
  ```

  ✅ Good!

  ```jsx
  import * as React from 'react';
  import Link from 'next/Link';
  import ResolvedComponent from '@/components/ResolvedComponent'; /** module resolution*/
  import Header from '../components/Header';
  import Demo from './DemoComponent';
  import '../index.css';
  ```

- Unused import Order.
  Unused imports increases bundle size. So, you must remove unused imports.

  **Example** ❌ Bad!

  ```jsx
  import React from 'react';
  import Link from 'next/Link'; // ❗ unused import
  import moment from 'moment'; // ❗

  /**
   ❗  The Link and moment increases the bundle size unnecessarily.
   🚨 The moment import takes more than a mb. Where frontend standard believes below 90kb is a good bundle.
   */

  const Example = () => {
    return <h1>Rakesh Shrestha</h1>;
  };
  ```

  ✅ Good!

  ```jsx
  import React from 'react';

  const Example = () => {
    return <h1>Rakesh Shrestha</h1>;
  };
  ```

- Every components should on `/components` directory should have only one responsible if possible.
- React components should have proper extension. This helps to differentiate between components and pure `js` files. _Example:_ `/components/Header/Header.jsx`, `/pages/home.jsx` etc.
- The components directory and any other directory should follow the structure of `/components/Header/index.jsx`, `/services/google/index.jsx` but utilities and helpers can also be defined as:

```
 | utils
   | string
     | logical.js
     | prototypes.js
     | index.jsx
   | arrays
     | index.jsx
```

- React imports should be defined as `import React from 'react'` or `import * as React from 'react'`.

  **Usage**

  ```jsx
  import * as React from 'react'; // ✅ should prefer this import style

  const Example = () => {
    const [state, setState] = React.useState(0);

    React.useEffect(() => {}, []);

    return <h1>React import demo</h1>;
  };
  ```

  💯 **Tip:** Using react hooks like this will save you from removing the destructured `{useState} from 'react'` when you don't need state on that application which will save your time ⏲️ in the future.

- Every react component used whether in `components` directory or `pages`. The component name should be same as the file name. This will help you debug your component easily when you're navigating through codes or react developers tool.
  **Example:**

  ```jsx
    | MyComponent
      | Header
        index.jsx

    // Header/index.jsx => component
    const Header = () => {}
  ```

- Always use self closing tags when the component doesnot accepts any children. _example: `<MyComponent/>`_. This will reduce the code.
- Use `<></>` instead of `<React.fragment />`. Only use the longer version when you need to pass `key` as a prop in a fragment.
- Event handlers should follow the naming convention of `handle<Event-name>`. _example `handleClick, handlePurchase` etc_. But when an event is passed as a prop to a child then do `onHandle<Event-name>`. \*example `onHandleClick={handleClick}`.This will help to differentiate what event is coming from here with just the name.
- Don't use `useMemo` & `React.memo()` as a means to memoize your application without proper performance test. If used without caution they can increase the memory and slow down the performance of the application.
- When you have a medium to large component and you are sure that the component won't be loaded for all users then that component should be lazy loaded. If not lazy loaded then the component will bundle itself to the parent component and users have to download extra bytes of data for things that they don't use. Lazy imports increases performance. Use `React.lazy()` but it should also have `React.Suspense`.
- Image component will optimize the component according to devices and lazy load the image itself. Also, with fixed height and width we will decrease the amount of layout / content shifting which leads to better user experience and better seo for performance.
- Reduce global css and increase local component css.
- Nextjs doesn't support component level css imports because they'll pollute the global css styles. So, use scoped css like `.module.css`, `.module.scss`, `css-in-js library`. You'll be working mostly on `styled-components` a css-in-js library.
- Never ❌ pollute the global environment like `window`. If you have to then implement it wisely.
- Don't import library unnecessarily. Every libraries are not optimized. The smaller the dependencies the easier to maintain.

## Reporting

If you find any bugs or grammatical errors please make a pull request.

## References

- [React typescript](https://react-typescript-cheatsheet.netlify.app/)
