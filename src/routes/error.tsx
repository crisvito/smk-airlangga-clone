import React from "react";
import { Link } from "react-router-dom";

export function ErrorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 text-center text-4xl text-slate-900 dark:text-slate-300">
      <span className="underline">
        <Link to="/">GoBack</Link>
      </span>
      Ups! Page Not Found
    </div>
  );
}
