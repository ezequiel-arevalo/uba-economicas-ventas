import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layout/MainLayout";
import { routes } from "./routes";

export function AppRouter() {
  const appRoutes = routes();

  return (
    <Routes>
      <Route element={<MainLayout />}>  
        {appRoutes.map((route) => {
          if (!route.role) {
            const Component = route.component;
            return (
              <Route
                key={route.id}
                path={route.path}
                element={<Component />}
              />
            );
          }
          return null;
        })}
      </Route>
    </Routes>
  );
}