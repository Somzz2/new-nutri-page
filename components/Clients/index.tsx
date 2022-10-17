import styles from './styles.module.css';

export const Clients = () => {
    return (
        <div className={styles.container}>
            <div className={styles.count}>
                <h3>37</h3>
                <span>Clientes</span>
            </div>
            <div className={styles.count}>
                <h3>108</h3>
                <span>Projetos</span>
            </div>
            <div className={styles.count}>
                <h3>1527</h3>
                <span>Horas</span>
            </div>
            <div className={styles.count}>
                <h3>100%</h3>
                <span>De Satisfação</span>
            </div>
        </div>
    )
}