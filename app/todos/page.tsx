// "use client";
import { addTask, getTasks } from "./actions";
// import { useState } from "react";

export default async function TodoPage() {
    const tasks = await getTasks();

    return (
        <main>
            <h1>To Do App</h1>

            <form action={addTask}>
                <input type="text" 
                name="task" 
                placeholder="Add task" 
                required />
                <button type="submit">Add Task</button>
            </form>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.content}</li>
                ))}
            </ul>
        </main>
    )
}

// function TodoClient({initialTasks}: { initialTasks: { id: number, content: string }[] }) {
//     const [tasks, setTasks] = useState(initialTasks);
//     const [taskInput, setTaskInput] = useState("");
// }