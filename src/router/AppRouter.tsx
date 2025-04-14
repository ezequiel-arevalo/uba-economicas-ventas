import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layout/MainLayout";
import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map((route) => {
          const RouteComponent = route.component;
          
          // Rutas públicas (login, registro, error)
          if (!route.role) {
            return (
              <Route 
                key={route.id} 
                path={route.path} 
                element={<RouteComponent />} 
              />
            );
          }
        })}
      </Route>
    </Routes>
  );
};