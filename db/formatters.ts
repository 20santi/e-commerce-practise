const CURRENCY_FORMATETER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATETER.format(amount);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

export function formateNumber(number: number) {
  return NUMBER_FORMATTER.format(number);
}
