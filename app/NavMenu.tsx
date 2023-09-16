import Link from 'next/link'
import Image from 'next/image'
import AuthCheck from '@/components/AuthCheck'
import {SignInButton, SignOutButton} from '@/components/buttons'
import styles from '@/app/NavMenu.module.css'

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/logo.svg" width={216} height={30} alt="NextSpace logo" />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>{' '}
        <li>
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  )
}
