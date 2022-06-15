function DoneTodo({ todo, setTodos, todos }) {

    function handleToggleTodo() {
        let updatedTodos = todos.map((t) => t.id == todo.id ? { ...t, done: !t.done } : t);
        setTodos(updatedTodos);
    }

    return (
        <span
            onClick={handleToggleTodo}
            role="button"
            style={{
                color: 'green',
                fontWeight: 'bold',
                marginLeft: 10,
                cursor: 'pointer'
            }}
        > D </span>
    )

}

export default DoneTodo;