import TaskStatItem from "./TaskStatsItem";
import styles from '../TaskStats/TaskStats.module.scss';

interface Props{
    total:number;
    completed:number
}


export default function TaskStats({total,completed}:Props) {
    return (
        <div className={styles.container}>
            <TaskStatItem title="დავალებები" amount={String(total)}/>
            <TaskStatItem title="დასრულებული" amount={`${completed}/${total}`} color='true'/>
        </div>
    )
    
}