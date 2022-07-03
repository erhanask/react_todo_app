function List({setListItems, listItems}) {

    const deleteFromList = (index) => {
        listItems.splice(index, 1);
        setListItems([...listItems]);
    }

    const toggleFinished = (index) => {

        listItems[index] = {title:listItems[index].title,isFinished:!listItems[index].isFinished};
        setListItems([...listItems,Object.assign({},listItems[index],{title:listItems[index].title,isFinished:listItems[index].isFinished})]);
        listItems.splice(listItems.length, 1);
        setListItems([...listItems]);
    }

    const updateInput = (e) => {
        e.preventDefault();
        listItems[e.target.name] = {title:e.target.value,isFinished:false};
        setListItems([...listItems,Object.assign({},listItems[e.target.name],{title:e.target.value,isFinished:listItems[e.target.name].isFinished})]);
        listItems.splice(listItems.length, 1);
        setListItems([...listItems]);
    }



    return (
        <div>
            <ul>
                {
                    listItems.map((item, index) => {
                        return item.title !== "" ? (<li key={index}>
                            <button onClick={() => toggleFinished(index)}>{item.isFinished ? 1 : "0"}</button>
                            &nbsp;
                            <input name={index}
                                   type="text"
                                   onChange={(e) =>  updateInput(e)}
                                   defaultValue={item.title}/>
                            &nbsp;
                            <button onClick={() => deleteFromList(index)}>X</button>
                        </li>) : "";
                    })
                }
            </ul>
        </div>
    );
}

export default List;
