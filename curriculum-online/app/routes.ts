import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./layouts/main.tsx", [
    index("./routes/home.tsx"),
    route("curriculum", "./pages/curriculum/index.tsx"),
    route("portfolio", "./pages/portfolio/index.tsx"),
    route("paty", "./pages/paty/index.tsx"),
  ]),
] satisfies RouteConfig;