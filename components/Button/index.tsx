import styles from './styles.module.css';

type Props = {
    onClick: () => void
}

const Button = ({onClick}: Props) => {
    return (
        <button className={styles.button} onClick={onClick}>Agende aqui!</button>
    )
}

export default Button