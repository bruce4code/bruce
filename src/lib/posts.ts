import { getAllContent, getContentBySlug, type ContentMeta } from "./content"

export type PostMeta = ContentMeta

export const posts: PostMeta[] = getAllContent("posts")

export function getPostMeta(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug)
}

export { getContentBySlug as getPostBySlug }
