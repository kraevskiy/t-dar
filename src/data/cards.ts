import { images } from "@/assets/images";
import { DataTypes } from "@/types/data.types.ts";

export const cards: DataTypes[] = [
  {
    name: "Mastercard",
    description: "Comission 3%",
    logo: images.logos.mastercard,
    badge: {
      name: "Popular",
    },
  },
  {
    name: "Visa",
    description: "Comission 3%",
    logo: images.logos.visa,
    badge: {
      name: "TRUSTED",
      type: "error",
    },
  },
  {
    name: "Skrill",
    description: "Comission 0%",
    logo: images.logos.skrill,
  },
  {
    name: "Perfect Money, EUR",
    description: "Commission 0%",
    logo: images.logos.pm,
  },
  {
    name: "Piastrix, EUR",
    description: "Commission 0%",
    logo: images.logos.piastrix,
  },
  {
    name: "SticPay, EUR",
    description: "Commission 0%",
    logo: images.logos.sticpay,
  },
  {
    name: "PIN",
    description: "Commission 0%",
    logo: images.logos.pin,
  },
];
