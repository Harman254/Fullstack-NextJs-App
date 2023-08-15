'use client'
import Link from "next/link"
import styles from './page.module.css'
import Darkmode from "../DarkModeToggle/Darkmode";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";


const Navbar = () => {
  const session = useSession();

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contacts",
      url: "/contacts",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>GerichCode Academy</Link>
      <div className={styles.links}>
        <Darkmode />
        {links.map((link) => (
          <Link className={styles.link} key={link.id} href={link.url}>{link.title}</Link>
        ))}
        {session.status === 'authenticated' &&
        (<button className={styles.logout} onClick={()=> signOut()}>Logout</button>)
        }
      </div>
      
    </div>
  )
}

export default Navbar
