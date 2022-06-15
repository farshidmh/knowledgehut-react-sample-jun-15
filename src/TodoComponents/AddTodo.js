function AddTodo({ setTodos }) {

    function handleAddTodo(event) {
        event.preventDefault();

        let inputText = event.target.elements.addTodo.value;
        let todo = { id: 4, text: inputText, done: false }

        setTodos((prevTodos) => {
            return prevTodos.concat(todo);
        })

    }

    return (
        <form onSubmit={handleAddTodo}>
            <input name='addTodo' type="text" placeholder='Add todo' /> <br />
            <button type='submit'> Save </button>
        </form>
    )

}

export default AddTodo;