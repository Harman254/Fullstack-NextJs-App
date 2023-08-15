import Button from '@/components/button/button';
import styles from './page.module.css'
import Image from 'next/image'


export const metadata = {
  title: "GerichCode Academy Contact Information",
  description: "Contact us",
};
const contacts = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>Lets keep in Touch</h1>
     <div className={styles.content}>
     <div className={styles.ImgContainer}>
      <Image  src='/contact.png' className={styles.image} fill={true} alt=''/>
     </div>
     <form className={styles.form}>
      <input type='text' placeholder='Name' className={styles.input}/>
      <input type='email' placeholder='Email' className={styles.input}/>
      <textarea placeholder='Message' className={styles.textarea}/>
      <Button url='#' text='send'/>

     </form>
     </div>
      
    </div>
  )
}

export default contacts
