import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/button/Button'

const about = () => {
  return (
    <div className={styles.container}>
     <div className={styles.Imgcontainer}>
      <Image className={styles.img} src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' fill={true} alt='' />
      <div className={styles.imgText}>
        <h1 className={styles.imgTitle}>
          Digital Storytellers
        </h1>
        <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
      </div>
     </div>
     <div className={styles.Textcontainer}>
     <div className={styles.item}>
      <h1 className={styles.title}>Who Are We?</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsam quibusdam sapiente mollitia quisquam temporibus animi molestias iusto, exercitationem ullam accusamus possimus enim quasi, repellendus atque veritatis suscipit ea at?
      <br/>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, est! Consectetur, rerum aperiam nulla dolor, laudantium in assumenda voluptate maiores dolores unde dicta provident! Dicta quisquam itaque provident quibusdam vitae?
      </p>

</div>
     <div className={styles.item}>
      <h1 className={styles.title}>What We Do?</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas laboriosam nisi consectetur veritatis delectus velit cum repellendus consequatur reiciendis nulla? 
        <br/>
        Illum laudantium facilis iste est sint quis, et accusantium dolore?
      </p>

      <Button url='contact' text='Contact' />

</div>

     </div>
      
    </div>
  )
}

export default about
