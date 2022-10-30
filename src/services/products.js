import { client } from "@/services/client";

export async function getPopularProducts() {
  return client.get("/popular-products?limit=10");
}
