import axios from "axios";

const COINGECKO_API_BASE_URL = "https://api.coingecko.com/api/v3";
const TOKENS = {
  USDC: "usd-coin",
  SOL: "solana",
  EURC: "eur-coin",
  STRM: "stream-token",
};

export async function fetchTokenPrice(tokenSymbol) {
  try {
    const response = await axios.get(`${COINGECKO_API_BASE_URL}/simple/price`, {
      params: {
        ids: TOKENS[tokenSymbol],
        vs_currencies: "usd", // Corrected to "usd"
      },
    });

    const tokenPriceInUSD = response.data[TOKENS[tokenSymbol]].usd;
    return tokenPriceInUSD;
  } catch (error) {
    console.error(`Error fetching ${tokenSymbol} price:`, error);
    return null;
  }
}

// Usage example:
async function fetchTokenPrices() {
  const usdcPrice = await fetchTokenPrice("USDC");
  console.log("Real-time USDC Price in USD:", usdcPrice);

  const solPrice = await fetchTokenPrice("SOL");
  console.log("Real-time SOL Price in USD:", solPrice);

  const eurcPrice = await fetchTokenPrice("EURC");
  console.log("Real-time EURC Price in USD:", eurcPrice);

  const strmPrice = await fetchTokenPrice("STRM");
  console.log("Real-time STRM Price in USD:", strmPrice);
}

// Call the function to fetch token prices
fetchTokenPrices();
