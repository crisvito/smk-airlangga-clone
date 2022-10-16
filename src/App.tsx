import { ScrollToTop } from "./components";
import { ErrorPage, RouteAbout, RouteHome } from "./routes";
import { RouteEvent } from "./routes";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="font-body flex min-h-screen flex-col overflow-x-hidden text-white">
        <div className="flex-[1]">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<RouteHome />} />
            <Route path="about/:slug" element={<RouteAbout />} />
            <Route path="event/:slug" element={<RouteEvent />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
