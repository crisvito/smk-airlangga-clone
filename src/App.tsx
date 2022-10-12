import { NavigationBar, Footer } from "./components";
import { RouteAbout, RouteHome } from "./routes";
import { Routes, Route } from "react-router-dom";
import { RouteEvent } from "./routes";

export default function App() {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="font-body flex min-h-screen flex-col text-white dark:text-white">
      <NavigationBar />
      <Routes>
        <Route path={`${base}`} element={<RouteHome />} />
        <Route path={`${base}about`} element={<RouteAbout />} />
        <Route path={`${base}event/:slug`} element={<RouteEvent />} />
      </Routes>
      <Footer />
    </div>
  );
}
