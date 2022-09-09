import styles from'./Button.module.css'

export function Button(props) {
  return (
    <button className={styles.button} type="submit">{props.title}</button>
  )  
}

