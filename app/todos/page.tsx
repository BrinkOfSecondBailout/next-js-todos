import { getTasks } from "../../actions/actions";
import TodosComponent from "../../components/todos-component";

export default async function TodoPage() {
    const tasks = await getTasks();

    return (
        <main>
            <h1>To Do App</h1>

            <TodosComponent tasks={tasks}/>
            
        </main>
    )
}