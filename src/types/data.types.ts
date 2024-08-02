
export interface PaymentBadgeType {
  name: string;
  type?: "info" | "error";
}

export interface DataTypes {
  name: string;
  description: string;
  logo: string;
  badge?: PaymentBadgeType;
}

export interface TransactionType {
  type: string;
  name: string;
  number: number;
  date: Date;
  amount: number;
  status: "processing" | "active" | "performed"
}
