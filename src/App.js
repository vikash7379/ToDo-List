import react, { useState } from "react";
import ToDoList from "./ToDOList";

const App = () => {

  const [inputItems,setInputItems] = useState("");
  const [list,setList]  = useState([]);

  const inputEvent =(event)=>{
    setInputItems(event.target.value);
  }

  const listItems = () => {
    setList((oldItems) => {
      return [...oldItems,inputItems]
    });
    setInputItems("");
  };

  const deleteItem = (id) => {
    console.log("delte");

    setList((oldItems)=> {
      return oldItems.filter ((arrElem, index) => {
        return index !== id;
      });
    })
  };

  const handleKeyPress = (event) =>{
    if(event.key == 'Enter'){
      console.log('Enter Key Press');
      listItems();
    }
  };

  return(
    <>
      <div className="parent">
        <div className="child">
          <br></br>
          <h1>ToDo List</h1>
          <br></br>
          <input
            type="text"
            placeholder="Add items"
            autoComplete="off"
            value={inputItems}
            onChange={inputEvent}
            onKeyPress={(event) => handleKeyPress(event)}
          />
          <button onClick={listItems}> + </button>
          <ol>
            {list.map((itemval, index) => {
              return <ToDoList
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItem}
              />
            })}
          </ol>

        </div>
        <p className="copyright">created by 💖 Vikash Chaurasia</p>
      </div>
    </>
  )
}

export default App;