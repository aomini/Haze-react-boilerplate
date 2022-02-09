import React from "react";

import DevelopersPage from "./pages/Developers";

const User = React.lazy(() => import("./pages/User"));
const About = React.lazy(() => import("./pages/About"));
const Home = React.lazy(() => import("./pages/Home"));

interface IRoutes {
  path: string;
  Element: React.ReactNode;
  protected?: boolean;
}

const routes: IRoutes[] = [
  {
    path: "/users",
    Element: <User/>,
    // Auth pages
    protected: true,
  },
  {
    path: "/about",
    Element: <About />,
  },
  {
    path: "/developers",
    Element: <DevelopersPage />
  },
  {
    path: "/",
    Element: <Home />,
  },
];
export default routes;
