import { FC, Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import Error from "../pages/error/Error.tsx";
import Loader from "../components/shared/ui/Loader.tsx";
import Favourites from "../pages/favourites/Favourites.tsx";

const HomeLayout = lazy(() => import("../components/layout/HomeLayout"));
const Movie = lazy(() => import("../pages/movies/Movies.tsx"));
const TV = lazy(() => import("../pages/tv/TV.tsx"));

const AppRouter: FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <div className="h-screen flex mt-6 text-primary items-center justify-center ">
              <Loader size={40} />
            </div>
          }
        >
          <HomeLayout>
            <Outlet />
          </HomeLayout>
        </Suspense>
      ),
      children: [
        { index: true, element: <Navigate to="/movies" replace /> },
        { path: "movies", element: <Movie /> },
        { path: "tv", element: <TV /> },
        { path: "favourites", element: <Favourites /> },
      ],
    },
    { path: "*", element: <Error /> },
  ]);

  return routes;
};

export default AppRouter;
