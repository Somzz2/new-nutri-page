import styles from './styles.module.css';

export const Consultancy = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
            <div className={styles.cardsArea}>
                <div className={styles.mainCard}>
                    <h1>CONSULTORIA ALIMENTAR</h1>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In facilisis convallis arcu ac tristique. Duis non sapien diam. Curabitur eleifend ipsum urna, et vulputate nibh sodales ut. Phasellus blandit lorem mi, congue accumsan ipsum tincidunt posuere. Curabitur condimentum ut eros vel eleifend. </span>
                </div>
                <div className={styles.card}>
                    <ul>
                        <li>Elaboração de POPs</li>
                        <li>Elaboração de fichas técnicas</li>
                        <li>Elaboração do manual de boas práticas de fabricação</li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <ul>
                        <li>Treinamento de colaboradores</li>
                        <li>Qualificação de fornecedores</li>
                        <li>Visitas de vistoria técnica</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}