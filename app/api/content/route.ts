import {NextResponse} from 'next/server'
import posts from '@/app/api/content/posts.json'

export async function GET() {
  return NextResponse.json(posts)
}
