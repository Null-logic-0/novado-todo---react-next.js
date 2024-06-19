import { Task } from '@/app/Task';
import styles from '../CreatedTask/TaskItem.module.scss';
import Image from 'next/image';

interface Props {
    task: Task;
    delete: (task: Task) => void;
    onTaskCompleted: (task: Task, completed: boolean) => void;
    done?: boolean;
}

export default function TaskItem(props: Props) {

    const removeTask = () => {
        props.delete(props.task);
    }

    const checked = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onTaskCompleted(props.task, e.target.checked);
    }

    return (
        <div className={styles.container}>
            <div className={styles.textArea}>
                <input 
                    type='checkbox' 
                    className={styles.checkbox} 
                    defaultChecked={props.task.completed} 
                    onChange={checked} 
                />
                <p className={props.task.completed ? styles.done : styles.text}>
                    {props.task.title}
                </p>
            </div>
            <Image 
                src={'/trash.svg'} 
                width={24} 
                height={24} 
                alt='icon' 
                className={styles.icon} 
                onClick={removeTask} 
            />
        </div>
    );
}
