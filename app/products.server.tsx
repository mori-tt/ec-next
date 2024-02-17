// import { fetch } from "next/data-client";
import fetch from "node-fetch";

async function getProducts() {
  const res = await fetch("./api/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function handler() {
  try {
    const products = await getProducts();
    return { props: { products } };
  } catch (e) {
    console.log(e);
    return { props: { products: [] } };
  }
}
