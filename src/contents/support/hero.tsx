import { Envelope, InstagramLogo } from "phosphor-react";

export function SupportHero() {
  return (
    <div
      id="support"
      className="my-5 h-auto bg-slate-200 text-slate-900 dark:bg-slate-900 dark:text-slate-200"
    >
      <h1 className="pt-7 text-center text-4xl font-black uppercase">
        Support
      </h1>

      <div className="mt-5 flex flex-col items-center">
        <p className="mb-2 font-medium">Support Airlangga Melalui</p>
        <div className="mb-2 flex">
          <a
            href="https://www.instagram.com/smkairlanggabpn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramLogo size={38} weight="fill" />
          </a>
          <Envelope size={38} weight="fill" />
        </div>
        <p>or</p>
        <form action="" className="flex flex-col gap-3 lg:w-2/6">
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            className="rounded border border-2 border-slate-900 dark:border-red-400"
          />
          <input
            type="text"
            name="name"
            placeholder="name"
            className="rounded border-2 border border-slate-900 dark:border-red-400"
          />
          <textarea
            name="body"
            id="text-body"
            placeholder="Message..."
            className="h-32 rounded border border-2 border-slate-900 dark:border-red-400"
          ></textarea>
          <button className="w:1/2 self-center rounded-md bg-slate-900 py-1 px-3 text-slate-200 hover:bg-slate-700 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-400 lg:w-1/4 lg:self-end">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
