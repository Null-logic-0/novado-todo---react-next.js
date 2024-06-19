import { Task } from "@/app/Task";
import styles from "./CreateTaskForm.module.scss";
import Image from "next/image";
import { SetStateAction,useState } from "react";

let id = 0;

interface Props {
    onTaskCreated: (task:Task) => void;
}


const CreateTaskForm = (props:Props) => {

    const [inputTitle,setTitle] =useState(' ');

    const createTask=()=>{

        const task: Task ={
            title:inputTitle,
            completed: false,
            id
            
        }

        id++;
        
        props.onTaskCreated(task)
        setTitle('')
    };

    const placeholder =(e: { target: { value: SetStateAction<string>; }; })=>{
        setTitle(e.target.value)
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder="ცხოვრების რა ნაწილის დაგეგმვა გსურს?" className={styles.input} onChange={placeholder} value={inputTitle}/>
            <button className={styles.button}  onClick={createTask}>
                დამატება
                <Image src={'/plus.svg'} alt="logo" width={16} height={16} />
            </button>

        </div>

    )

}

export default CreateTaskForm;

