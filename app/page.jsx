
import Hero from '../public/hero.png';
import Image from 'next/image';
import styles from './page.module.css'
import Button from '../components/button/Button'




export const metadata = {
  title: "GerichCode Home",
  description: "Join our tech community",
};

export default function Home() {
  return (
<div  className={styles.container}>
  <div className={styles.item}>
    <h1 className={styles.title}>
    Better design for your digital products.
 </h1>
 <p className={styles.desc}>Turning your idea to Reality. We bring together the teams from the global tech industry</p>
 
 <Button url='/portfolio' text='See Our Works' />

  </div>
  <div className={styles.item}>

  <Image src={Hero} alt='hero' className={styles.img} />
  </div>
</div>
  )
}
