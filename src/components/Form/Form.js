

function Form ({setListItems, listItems}) {

    const addTodo = (e) => {
        e.preventDefault();
        if (e.target[0].value !== "") {
            setListItems([...listItems,{title:e.target[0].value,isFinished:false}]);

            e.target[0].value = "";
        }
    }

    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={addTodo}>
                    <input className="new-todo" type="text" placeholder="What needs to be done ?" autoFocus/>
                </form>
            </header>
        </div>
    );
}

export default Form;
