import { TransactionType } from "@/types/data.types.ts";
import { images } from "@/assets/images";

export const transactions: TransactionType[] = [
  {
    type: images.logos.sticpay,
    name: "by SticPay, USD",
    number: 142354,
    date: new Date(2012, 11),
    amount: 2305,
    status: "processing",
  },{
    type: images.logos.skrill,
    name: "by Skrill, USD",
    number: 142354,
    date: new Date(2015, 6),
    amount: 12327,
    status: "active",
  },{
    type: images.logos.mastercard,
    name: "by Mastercard, USD",
    number: 142354,
    date: new Date(2024, 2),
    amount: 8000,
    status: "performed",
  },
];
