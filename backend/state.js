let lastPrice = null

export function isUpdated(newPrice) {
  return newPrice !== lastPrice
}

export function updateLastPrice(price) {
  lastPrice = price
}
