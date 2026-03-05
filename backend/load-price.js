const defaultUrl = 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';

export async function loadPrice() {
  const res = await fetch(defaultUrl)

  const data = await res.json()

  return {
    symbol: data.symbol,
    price: parseFloat(data.price),
    timestamp: new Date().toString()
  }
}