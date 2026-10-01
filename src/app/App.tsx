import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { ROUTES } from "@/shared/lib";
import { HomePage } from "../pages/home";
import { MoviePage } from "../pages/movie";
import { NotFoundPage } from "../pages/not-found";
import styles from "./App.module.css";

function RootLayout() {
  return (
    <div className={styles.page}>
      <div className={styles.bg} aria-hidden="true" />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.MOVIE, element: <MoviePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
