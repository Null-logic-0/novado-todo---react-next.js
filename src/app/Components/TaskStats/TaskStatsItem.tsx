import styles from '../TaskStats/TaskStatsItem.module.scss';

interface Props {
    title: string;
    amount: string;
    color?: string;
}



const TaskStatItem =({title,amount,color}:Props)=>{

    const classNames = [styles.text];
    if (color) {
        classNames.push(styles.color)
    }


    return(
        <div className={styles.container}>
            <p className={classNames.join(' ').trim()}>{title}</p>
            <span className={styles.amount}>{amount}</span>
        </div>
    )
}

export default TaskStatItem;