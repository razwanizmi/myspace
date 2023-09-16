export const revalidate = 1200

interface Post {
  title: string
  content: string
  slug: string
}

interface Props {
  params: {slug: string}
}

// Tells Next to generate dynamic data in advance - ideal for content that does
// not change often like blog posts. Works with revalidate for incremental
// static regeneration.
export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    res => res.json(),
  )

  return posts.map(post => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({params}: Props) {
  // Automatically deduped - must use full URL on server components
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    res => res.json(),
  )

  const post = posts.find(post => post.slug === params.slug)!

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}
