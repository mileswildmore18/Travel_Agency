// Configuration for the routes
import { type RouteConfig, route } from "@react-router/dev/routes";

// export routes to dashboard
export default [
    route('dashboard', 'routes/admin/dashboard.tsx')
] satisfies RouteConfig;