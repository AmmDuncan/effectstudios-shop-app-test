import { client } from "@/services/client";

export async function getBannerListing() {
  return client.get("/banner?status=true");
}
