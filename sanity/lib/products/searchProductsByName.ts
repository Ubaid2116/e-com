import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductsByName = async (searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
    *[
      _type == "product"
      && name match $searchParam
    ] | order(name asc)
  `);

  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: {
        searchParam: `${searchParam}*`, // Adding a wildcard for partial matches
      },
    });
    console.log("Products fetched by name:", products?.data);
    return products?.data || []; // Ensure return is an array even if no data
  } catch (error) {
    console.error("Error fetching products by name", error);
    return [];
  }
};
