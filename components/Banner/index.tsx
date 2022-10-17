import Image from 'next/image';
import styles from './styles.module.css';
import food from './food-img.png';
import Button from '../Button';

const Banner = () => {

    const handleBtn = () => {
        
    }


    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <h1>MARQUE A SUA CONSULTA ONLINE</h1>
                <span>Clique no botão abaixo e marque a sua consulta agora mesmo!</span>
                <a href='https://api.whatsapp.com/send?phone=779999999&text=Olá,%20gostaria%20de%20marcar%20uma%20consulta%20online!'><Button onClick={handleBtn}/></a>
            </div>
            <div className={styles.areaImage}>
                <Image className={styles.image} src={food} width={400} height={400}/>
            </div>
        </div>
    )
}

export default Banner