import { lazy, LazyExoticComponent } from "react";
import LazyPage1 from "../lazyload/pages/LazyPage1";
import LazyPage3 from "../lazyload/pages/LazyPage3";

const LazyPage2 = lazy(
  () =>
    import(/*webpackChunkName:"lazy-about"  */ "../lazyload/pages/LazyPage2")
);
const LazyLayout = lazy(() => import("../lazyload/layout/LazyLayout"));

interface Route {
  to: string;
  path: string;
  Component: any;
  name: string;
}

export const routes: Route[] = [
  {
    to: "/",
    path: "/",
    Component: LazyPage1,
    name: "Home",
  },
  {
    to: "/about",
    path: "/about",
    Component: LazyPage3,
    name: "about",
  },
  {
    to: "/LazyLayout/",
    path: "/LazyLayout/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
];
