import { Link as LinkScroll } from "react-scroll";

interface SettingsMenuProps {
  children: string;
  where: string;
}

export function ButtonScroll({ where, children }: SettingsMenuProps) {
  return (
    <LinkScroll
      to={where}
      className="mt-3 w-3/4 cursor-pointer rounded-lg bg-slate-200 p-3 font-black text-slate-900 duration-300 hover:w-full hover:bg-slate-900 hover:text-slate-200 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-200 dark:hover:text-slate-900 lg:w-1/2 lg:hover:w-2/3"
    >
      {children}
    </LinkScroll>
  );
}
