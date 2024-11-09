import type { RouteConfig } from "@react-router/dev/routes";
import { index } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";


// export const routes: RouteConfig = [index("routes/home.tsx")];
export const routes: RouteConfig = flatRoutes();
