export const formatAmount = (value: number) => new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
}).format(value);
