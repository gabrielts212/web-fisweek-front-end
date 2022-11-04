import styles from './Avatar.module.css'

export function Avatar({ src, name, background }) {
  return (
    <div>
      <img className={styles.avatar} src={src} onError={(e) =>
                  (e.target.onerror = null)(
                    (e.target.src =
                      "https://fis.org.br/images/lideres/avatarLeader.png"))} />
      <img className={styles.imgRectangle} src={background}/>
      <span className={styles.speakerName}>{name}</span>
    </div>
  )
}
