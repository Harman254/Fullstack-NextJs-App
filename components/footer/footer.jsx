import styles from './page.module.css';
import Image  from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 Gerich Code Academy. All rights reserved.</div>
      <div className={styles.social} >
        <Image className={styles.icon} src='/1.png' height={15} 
        width={15} alt='facebook' />
        <Image className={styles.icon} src='/2.png' height={15} 
        width={15} alt='instagram' />
        <Image className={styles.icon} src='/3.png' height={15} 
        width={15} alt='twitter' />
        <Image className={styles.icon} src='/4.png' height={15} 
        width={15} alt='youtube' />
       

        
        
      </div>
    </div>
  )
}

export default Footer
