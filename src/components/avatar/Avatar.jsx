import styles from './Avatar.module.css'

export function Avatar({ src, name, background }) {
  return (
    <div>
      <img className={styles.avatar} src={src} />
      <img className={styles.imgRectangle} src={background}/>
      <span className={styles.speakerName}>{name}</span>
    </div>
  )
}
