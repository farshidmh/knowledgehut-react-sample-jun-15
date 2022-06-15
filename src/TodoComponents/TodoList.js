import DeleteTodo from './DeleteTodo.js'
import DoneTodo from './DoneTodo';


function TodoList({ todos, setTodos }) {

    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.id}
                    style={{
                        textDecoration: todo.done ? "line-through" : ""
                    }}>
                    <DoneTodo todo={todo} setTodos={setTodos} todos={todos} />
                    {todo.text}
                    <DeleteTodo todo={todo} setTodos={setTodos} />
                </li>

            ))}
        </ul>
    )

}


export default TodoList;