import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";

interface Tab {
  value: string;
  name: string;
  content: any;
}

const tabs: Tab[] = [
  { value: "tab1", name: "New & Trending", content: "Tab one content" },
  { value: "tab2", name: "Top Sellers", content: "Tab second content" },
  { value: "tab3", name: "Popular Upcoming", content: "Tab third content" },
  { value: "tab4", name: "Specials", content: "Tab fourth content" },
];

export function CategoryTabs() {
  return (
    <div>
      <TabsPrimitive.Root defaultValue="tab1">
        <TabsPrimitive.List className={clsx("flex w-full")}>
          {tabs.map((tab) => (
            <TabsPrimitive.Trigger
              key={tab.value}
              value={tab.value}
              className={clsx(
                "group",
                "rounded-t-lg radix-state-active:border-b-gray-100 radix-state-active:bg-gray-800 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-slate-900 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-800 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-slate-900",
                "flex-1 px-3 py-2.5",
                "focus-visible:ring-back focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                // dark
              )}
            >
              <span className="font-body-bold text-md">{tab.name}</span>
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {tabs.map((tab) => (
          <TabsPrimitive.Content
            key={tab.value}
            value={tab.value}
            className="rounded-b-lg bg-white bg-gray-800 px-6 py-4 dark:bg-gray-800"
          >
            {tab.content}
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>
    </div>
  );
}
