import Image from 'next/image';
import styles from './styles.module.css';
import nutricao from './nutricao.jpg';

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <h1>Sobre mim</h1>
            <div className={styles.about}>
                <Image src={nutricao} width={500} height={300} className={styles.image}/>
                <div className={styles.text}>Eu sou a Fulana,  formada em Nutrição com especialidade em Nutrição Clínica. Realizo consultas onlines com ótimo valor e preço.
                    <br/><br/>
                    Atuo também com consultoria nutricional para Hotéis, Pousadas, Restaurantes, Mercados, Escolas e Clínicas adequando o local às exigências da Vigilância Sanitária, garantindo um fluxo de trabalho produtivo, reduzindo custos e desperdícios, além de produzir refeições que tenham alto valor nutritivo. 
                </div>
            </div>
        </div>
    )
}

export default AboutUs