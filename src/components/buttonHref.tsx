import { Link } from "react-router-dom";

interface SettingsMenuProps {
  children: string;
  where: string;
}

export function ButtonHref({ where, children }: SettingsMenuProps) {
  return (
    <Link
      to={where}
      className="mt-3 w-3/4 cursor-pointer rounded-lg bg-slate-200 p-3 text-center font-black text-slate-900 duration-300 hover:w-4/6 hover:bg-slate-900 hover:text-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 lg:w-1/6 lg:hover:w-1/5"
    >
      {children}
    </Link>
  );
}
