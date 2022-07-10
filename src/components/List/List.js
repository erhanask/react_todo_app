import {useRef} from "react";

function List({setListItems, listItems}) {

    const listItem = useRef();

    const deleteFromList = (index) => {
        listItems.splice(index, 1);
        setListItems([...listItems]);
    }

    const toggleFinished = (index) => {

        listItems[index] = {title: listItems[index].title, isFinished: !listItems[index].isFinished};
        setListItems([...listItems, Object.assign({}, listItems[index], {
            title: listItems[index].title,
            isFinished: listItems[index].isFinished
        })]);
        listItems.splice(listItems.length, 1);
        setListItems([...listItems]);
    }

    //todo: toggleAllfinished çalıştırılacak.
    // const toggleAllFinished = () => {
    //     let objects;
    //     for (let i = 0 ; i < listItems.length ; i ++) {
    //         listItems[i] = {title: listItems[i].title, isFinished: !listItems[i].isFinished};
    //
    //         objects = [Object.assign({}, listItems[i], {
    //             title: listItems[i].title,
    //             isFinished: listItems[i].isFinished
    //         })];
    //     }
    //     setListItems(objects);
    // }

    //todo: update sıkıntısı giderilecek.
    const updateInput = (e) => {
        e.preventDefault();
        listItems[e.target.name] = {title: e.target.value, isFinished: false};
        setListItems([...listItems, Object.assign({}, listItems[e.target.name], {
            title: e.target.value,
            isFinished: listItems[e.target.name].isFinished
        })]);
        listItems.splice(listItems.length, 1);
        setListItems([...listItems]);
    }

    const clearCompleted = () => {
        setListItems(listItems.filter((item) => item.isFinished === false && item.title !== ""));
    }

    return (
        <>
            <section className="main">
                {/*<input  className="toggle-all" type="checkbox"/>*/}
                {/*<label onClick={(e) => toggleAllFinished(e)} htmlFor="toggle-all">*/}
                {/*    Mark all as complete*/}
                {/*</label>*/}

                <ul className="todo-list">
                    {
                        listItems.map((item, index) => {
                            return item.title !== "" ? (<li className="selected" key={index}>
                                <div ref={listItem} className="view">
                                    <span className={item.isFinished ? 'image-completed toggle' : 'image-todo toggle'}
                                            onClick={() => toggleFinished(index)}
                                    ></span>
                                    &nbsp;
                                    <input name={index}
                                           type="text"
                                           onChange={(e) => updateInput(e)}
                                           key={item.title}
                                           defaultValue={item.title}
                                           className={item.isFinished ? "completed-text" : ""}
                                    />
                                    &nbsp;
                                    <button className="destroy" onClick={() => deleteFromList(index)}></button>
                                </div>
                            </li>) : "";
                        })
                    }

                </ul>
            </section>

            <footer className="footer">
                    <span className="todo-count">
                        <strong>{listItems.length === 0 ? "There are no items" : (listItems.length -1) + " items left"}</strong>
                    </span>
                <ul className="filters">

                </ul>

                <button onClick={() => clearCompleted()} className="clear-completed">
                    Clear completed
                </button>
            </footer>

        </>
    );
}

export default List;
