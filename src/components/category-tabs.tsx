import * as TabsPrimitive from "@radix-ui/react-tabs";
import { clsx } from "clsx";
import { dataCategories } from "../data";
import { FormatGamePrice } from "../utils";
import { Icon } from "../components";

export function CategoryTabs() {
  return (
    <div>
      <TabsPrimitive.Root defaultValue="tab1">
        <TabsPrimitive.List className={clsx("flex w-full")}>
          {dataCategories.map((category) => (
            <TabsPrimitive.Trigger
              key={category.value}
              value={category.value}
              className={clsx(
                "group",
                "rounded-t-lg radix-state-active:border-b-gray-100 radix-state-active:bg-gray-800 focus-visible:radix-state-active:border-b-transparent radix-state-inactive:bg-slate-900 dark:radix-state-active:border-b-gray-100 dark:radix-state-active:bg-gray-800 focus-visible:dark:radix-state-active:border-b-transparent dark:radix-state-inactive:bg-slate-900",
                "flex-1 px-3 py-2.5",
                "focus-visible:ring-back focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
                // dark
              )}
            >
              <span className="font-body-bold text-md">{category.name}</span>
            </TabsPrimitive.Trigger>
          ))}
        </TabsPrimitive.List>
        {dataCategories.map((category) => (
          <TabsPrimitive.Content
            key={category.value}
            value={category.value}
            className="rounded-b-lg bg-gray-800 px-6 py-5 dark:bg-gray-800"
          >
            <div className="flex flex-col gap-4">
              {category.games.map((game) => {
                return (
                  <div
                    key={game.name}
                    className="game flex bg-slate-900 hover:bg-slate-700"
                  >
                    <img
                      src={game.thumbnailImgUrl}
                      alt={game.thumbnailImgUrl}
                    />

                    <div className="game-details flex w-full items-center justify-between py-3 px-5">
                      <div className="space-y-1">
                        <h4 className="font-body-bold">{game.name}</h4>
                        <div className="flex gap-1">
                          {game.platforms.map((platform) => {
                            return <Icon key={platform} name={platform} />;
                          })}
                        </div>
                        <p>{game.tags.join(", ")}</p>
                      </div>

                      <div className="game-price">
                        <p>{FormatGamePrice(game)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsPrimitive.Content>
        ))}
      </TabsPrimitive.Root>
    </div>
  );
}
