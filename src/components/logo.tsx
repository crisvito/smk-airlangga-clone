import { Backpack, Circle, ThumbsUp, UsersThree } from "phosphor-react";

export function Logo({ logo }: { logo: string }) {
  switch (logo) {
    case "Backpack":
      return <Backpack size={72} weight="fill" />;
    case "ThumbsUp":
      return <ThumbsUp size={72} weight="fill" />;
    case "UsersThree":
      return <UsersThree size={72} weight="fill" />;
    default:
      return <Circle weight="fill" />;
  }
}
