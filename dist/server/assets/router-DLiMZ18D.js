import { createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const siteName = "Otkup polovnog i stilskog nameštaja | Beograd i cela Srbija";
const siteDescription = "Dajte svom nameštaju novu priču. Besplatna procena i fer otkup polovnog i stilskog nameštaja i antikviteta. Organizovan prevoz i isplata na licu mesta. 062 788 984.";
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: siteName
      },
      {
        name: "description",
        content: siteDescription
      },
      {
        property: "og:title",
        content: siteName
      },
      {
        property: "og:description",
        content: siteDescription
      },
      {
        property: "og:type",
        content: "website"
      },
      { property: "og:locale", content: "sr_RS" },
      { property: "og:site_name", content: "Otkup stilskog nameštaja" },
      { property: "og:url", content: "https://grand-profiterole-c9a5c7.netlify.app/" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#f8f9f5" },
      {
        name: "twitter:card",
        content: "summary_large_image"
      }
    ],
    links: [
      { rel: "canonical", href: "https://grand-profiterole-c9a5c7.netlify.app/" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;650;700&family=Instrument+Serif:ital@0;1&display=swap" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "sr-Latn", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-Db66UtBO.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
