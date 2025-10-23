import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("page1", "routes/page1.tsx"),
  route("page2", "routes/page2.tsx"),
  route("page3", "routes/page3.tsx"),
  route("page4", "routes/page4.tsx"),
  route("page5", "routes/page5.tsx"),
  route("page6", "routes/page6.tsx"),
  route("page7", "routes/page7.tsx"),
  route("page8", "routes/page8.tsx"),
  route("page9", "routes/page9.tsx"),
  route("page10", "routes/page10.tsx"),
] satisfies RouteConfig;
