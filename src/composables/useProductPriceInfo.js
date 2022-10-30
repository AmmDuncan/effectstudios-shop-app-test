export function useProductPriceInfo() {
  function getPriceInfo(product) {
    const variants = product?.variants;
    if (!variants || !variants.length)
      return { price: 0, oldPrice: null, savings: null };
    const variant = variants[0];
    const price = variant?.price;
    const priceValue = parseFloat(price);
    const oldPrice = priceValue ? variant.compare_at_price : null;
    const oldPriceValue = parseFloat(oldPrice);
    const savings = oldPriceValue
      ? (oldPriceValue - priceValue) / oldPriceValue
      : 0;
    return { price, oldPrice: oldPriceValue ? oldPrice : null, savings };
  }

  return { getPriceInfo };
}
