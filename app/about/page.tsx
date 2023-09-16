import {Metadata} from 'next'

// Not necessary as Next will automatically know to cache this page because no
// data fetching takes place.
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'We are a social media company',
}

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <p>We are a social media company!</p>
    </main>
  )
}
