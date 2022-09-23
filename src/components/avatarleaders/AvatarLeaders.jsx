import styles from './AvatarLeaders.module.css';

export function AvatarLeaders(props) {
    return (  
        <img className={styles.avatarLeaders} src={props.src} alt="imagem-lider" />
    );
}

