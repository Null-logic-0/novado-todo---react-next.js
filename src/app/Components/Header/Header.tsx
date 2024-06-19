import styles from "./Header.module.scss";
import Image from 'next/image';

const Header=()=>{
    return (

        <div className={styles.container}>

            <Image src={'/Logo.svg'} alt='logo' width={183} height={48}/>


        </div>
    )
}

export default Header;