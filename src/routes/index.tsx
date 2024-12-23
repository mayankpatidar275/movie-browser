import { FC, Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import Error from "../pages/error/Error.tsx";

const HomeLayout = lazy(() => import("../components/layout/HomeLayout"));
const Movie = lazy(() => import("../pages/movies/Movies.tsx"));
const TV = lazy(() => import("../pages/tv/TV.tsx"));

const AppRouter: FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <HomeLayout>
            <Outlet />
          </HomeLayout>
        </Suspense>
      ),
      children: [
        { index: true, element: <Navigate to="/movies" replace /> },
        { path: "movies", element: <Movie /> },
        { path: "tv", element: <TV /> },
      ],
    },
    { path: "*", element: <Error /> },
  ]);

  return routes;
};

export default AppRouter;
