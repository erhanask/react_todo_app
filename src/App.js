import './App.css';
import Form from "./components/Form";
import List from "./components/List";
import {useState} from "react";

function App() {
    const [listItems, setListItems] = useState([{title: "", isFinished: false}]);


    return (
        <div className="App">
            <section className="todoapp">
                <Form setListItems={setListItems} listItems={listItems}/>
                <List setListItems={setListItems} listItems={listItems}/>
            </section>
        </div>
    );
}

export default App;
