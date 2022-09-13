import { NavigationBar } from "./components";

export default function App() {
  return (
    <div className="dark:text-white">
      <NavigationBar />
      <main>
        <p>content</p>
      </main>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}
