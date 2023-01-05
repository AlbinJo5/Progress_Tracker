
import Image from 'next/image'
import styles from '../styles/components/mainCard.module.scss'
import shareIcon from '../public/assets/icons/share.svg'
import editIcon from '../public/assets/icons/edit.svg'
import deleteIcon from '../public/assets/icons/trash.svg'

function MainCard({item}) {
  const {name, description, progress} = item
  return (
    <div className={styles.main_card} style={{
      boxShadow: progress < 50 ? '0 0 1vw .05vw #FF0000' : progress < 80 ? '0 0 1vw .05vw #FFA500' : '0 0 1vw .05vw #00FF00'
    }} >
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.progress}>
        <div className={styles.progress_bar_container}>

        <div className={styles.progress_bar} style={{
          width: `${progress}%`,
          backgroundColor: progress < 50 ? '#FF0000' : progress < 80 ? '#FFA500' : '#00FF00'
          
        }}></div>
        </div>
        <p>Progress: {progress}%</p>
      </div>
      <div className={styles.icons}>
          <Image src={editIcon} alt="Edit" width={1000} height={1000} />
          <Image src={deleteIcon} alt="Delete" width={1000} height={1000} />
          <Image src={shareIcon} alt="Share" width={1000} height={1000} />
      </div>   

      </div>
  )
}

export default MainCard