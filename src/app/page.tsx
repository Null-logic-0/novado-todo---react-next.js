'use client'
import Image from "next/image";
import styles from "./page.module.css";
import CreateTaskForm from "./Components/CreateTask/CreateTaskForm";
import Header from "./Components/Header/Header";
import { Task } from "./Task";
import { useState } from "react";
import TaskItem from "./Components/CreatedTask/TaskItem";
import TaskStats from "./Components/TaskStats/TaskStats";
import Done from "./Components/Done/Done";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedCount, setCount] = useState(0);


  const taskCreatedSuccessFully = (task: Task) => {
    setTasks([...tasks, task]);

  };

  const deleteTask = (taskToDelete: Task) => {
    const newTask = tasks.filter((item) => taskToDelete.id !== item.id);
    if (taskToDelete.completed) {
      setCount(completedCount - 1);
    }

    setTasks(newTask)

  };

  const onTaskCompleted = (completedTask: Task, completed: boolean) => {
    if (completed) {
      setCount(completedCount + 1)
    } else {
      setCount(completedCount - 1)
    }
    const newTasks = tasks.map((task) => {
      if (task.id === completedTask.id) {
        return {
          ...task,
          completed: completed,
        };
      }

      return task

    });

    setTasks(newTasks)

  };

  const ShowDone = tasks.length === 0;


  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.input}>
        <CreateTaskForm onTaskCreated={taskCreatedSuccessFully} />
      </div>

      <div className={styles.stats}>
        <TaskStats total={tasks.length} completed={completedCount} />

      </div>
      {ShowDone && (
        <div className={styles.done}>
          <Done />

        </div>
      )

      }


      <div className={styles.tasks}>

        {
          tasks
            .sort((item1, item2) => item1.id - item2.id)
            .sort((item1) => item1.completed ? 1 : -1)
            .map((t) =>
              <TaskItem task={t} key={t.id} delete={deleteTask} onTaskCompleted={onTaskCompleted} />
            )
        }


      </div>


    </main>
  );
}
