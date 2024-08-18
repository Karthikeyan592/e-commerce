import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const revalidate = 60
export const client = createClient({
  projectId: "68k2gzbf",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}