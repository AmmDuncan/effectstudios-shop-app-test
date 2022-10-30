import { client } from "@/services/client";

export async function getProductCategories() {
  return client.get("/product-category");
}

export async function getCategoriesBySlug(slug) {
  return client.get(`/product-category-slug/${slug}`);
}

export async function getProductBySlug(slug) {
  return client.get(`product-single/${slug}`);
}
