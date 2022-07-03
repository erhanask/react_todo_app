

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
            <form onSubmit={addTodo}>
                <div>
                    <span>
                        #
                    </span>
                    <input name="title" type="text" placeholder="What needs to be done ?"/>
                </div>
            </form>
        </div>
    );
}

export default Form;
