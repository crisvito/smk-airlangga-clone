export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex flex-wrap justify-center bg-slate-500 px-10 py-5 text-slate-900 dark:bg-slate-800 dark:text-slate-200">
      <p>&copy; {year} pitokai </p>
    </footer>
  );
}
