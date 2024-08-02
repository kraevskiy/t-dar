import { DataTypes } from "@/types/data.types.ts";
import { images } from "@/assets/images";

export const crypto: DataTypes[] = [
  {
    name: "BTC",
    description: "Commission 0%",
    logo: images.logos.btc,
  },
  {
    name: "ETH",
    description: "Commission 0%",
    logo: images.logos.eth,
  },
  {
    name: "USDT",
    description: "Commission 0%",
    logo: images.logos.usdt,
  },
];
