import styles from './styles.module.css';
import logo from '../Header/logo.png';
import location from './location.png';
import wpp from './wpp.png';
import Image from 'next/image';

export const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <Image src={logo}  width={80} height={50}/>
                <span>Fulana Beltrana</span>
            </div>
            <div className={styles.info}>
                <Image src={wpp}  width={50} height={50}/>
                <span>(99) 99999-9999</span>
            </div>
            <div className={styles.info}>
                <Image src={location}  width={50} height={50}/>
                <span>São Paulo/SP</span>
            </div>
            
            
            
        </div>
    )
}