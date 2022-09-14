export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex flex-wrap justify-center bg-slate-700 px-10 py-5">
      <p>&copy; {year} pitokai </p>
    </footer>
  );
}
