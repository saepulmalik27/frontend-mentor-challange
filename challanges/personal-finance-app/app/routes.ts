import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

const appRoutes = [
    index("routes/home.tsx"), 
    layout("routes/auth/layout.tsx", [
        route('signin', 'routes/auth/signin.tsx'),
        route('signup', 'routes/auth/signup.tsx'),
    ]),

] satisfies RouteConfig;

export default appRoutes;