import styles from './styles.module.css';

const NutritionConsultations = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardsArea}>
                <div className={styles.mainCard}>
                    <h1>CONSULTA ONLINE</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis convallis arcu ac tristique. Duis non sapien diam. Curabitur eleifend ipsum urna, et vulputate nibh sodales ut. Phasellus blandit lorem mi, congue accumsan ipsum tincidunt posuere. Curabitur condimentum ut eros vel eleifend. </span>
                </div>
                <div className={styles.card}>
                    <ul>
                        <li>Emagrecimento</li>
                        <li>Nutrição Clínica</li>
                        <li>Nutrição materno infantil</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <ul>
                        <li>Orientação nutricional e ditética</li>
                        <li>Plano alimentar</li>
                        <li>Reeducação alimentar</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NutritionConsultations;