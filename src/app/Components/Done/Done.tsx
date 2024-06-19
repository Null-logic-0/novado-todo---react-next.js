import Image from "next/image";
import styles from '../Done/Done.module.scss';




export default function Done() {
    return (
        <div className={styles.container}>
            <Image src={'/Clipboard.svg'} alt="icon" width={56} height={56} className={styles.img}/>
            <span className={styles.bold}>დავალებები ჯერ არ გაქვთ </span>
            <p className={styles.title}>
                შექმენით დავალებები და დაიწყეთ თქვენი ცხოვრების დაორგანიზება ჩვენთან ერთად
            </p>

        </div>
    )

}