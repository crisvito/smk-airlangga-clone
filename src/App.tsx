import { NavigationBar, Footer } from "./components";
import { RouteHome } from "./routes";

export default function App() {
  return (
    <div className="font-body flex min-h-screen flex-col text-white dark:text-white">
      <NavigationBar />
      <RouteHome />
      <Footer />
    </div>
  );
}
