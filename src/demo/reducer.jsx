import {Checkbox} from "../forms/checkbox.jsx";
import {useTodos} from "../hooks/useTodos.js";
import {Header} from "../ui/Header.jsx";

export function Reducer() {
    const todos = [
        {
            id: 1,
            name: 'Faire les courses',
            checked: false,
        },
        {
            id: 2,
            name: 'Ranger les courses',
            checked: false,
        },
        {
            id: 3,
            name: 'Manger les courses',
            checked: false,
        },
    ];
    const {visibleTodos, showCompleted, toggleTodo, removeTodo, clearCompleted, toggleFilter} = useTodos(todos);

    return <div>
        <Header />
        <Checkbox label="Afficher les tâches accomplies" checked={showCompleted} onChange={toggleFilter} />
        <ul className="list-group">
            {visibleTodos.map(todo => (
                <li
                    key={todo.name}
                    className="hstack gap-3"
                >
                    <Checkbox label={todo.name} checked={todo.checked} onChange={() => toggleTodo(todo)} />
                    <button onClick={() => removeTodo(todo)} className="btn btn-sm btn-danger">Supprimer</button>
                </li>
            ))}
        </ul>
        <button onClick={clearCompleted} className="btn btn-sm btn-danger">Supprimer les tâches accomplies</button>
    </div>
}
