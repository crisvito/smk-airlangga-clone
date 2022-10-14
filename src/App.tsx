import { NavigationBar, Footer, ScrollToTop } from "./components";
import { ErrorPage, RouteEvents, RouteHome } from "./routes";
import { RouteEvent } from "./routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-body flex min-h-screen flex-col overflow-x-hidden text-white dark:text-white">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<RouteHome />} />
          <Route path="events" element={<RouteEvents />} />
          <Route path="event/:slug" element={<RouteEvent />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
