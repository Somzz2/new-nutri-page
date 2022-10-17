import Image from 'next/image';
import styles from './styles.module.css';
import logo from './logo.png';

const Header = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.logo} src={logo} width={150} height={120} />
            <h1>Nutricionista Ana Carla Falcão</h1>
        </div>
    )
}

export default Header