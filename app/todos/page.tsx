import Form from "../../components/form";
import { getTasks } from "../../actions/actions";

export default async function TodoPage() {
    const tasks = await getTasks();

    return (
        <main>
            <h1>To Do App</h1>

            <Form />
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.content}</li>
                ))}
            </ul>
        </main>
    )
}