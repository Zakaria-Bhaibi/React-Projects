import { useState } from "react";

const Home = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    //Clear input box
    setInput("");
  };
  const deleteTodo = (id) => {
        //filter out todo with the id
        const newlist = list.filter((todo)=> todo.id !== id);
        setList(newlist);
    
  }
  return (
    <div className="content">
      <h1>To Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={()=>addTodo(input) }>Add</button>
      <ul>
        {list.map((todo)=>(
            <li key={todo.id}>
                {todo.todo}
                <button >Finished</button>
                <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                
            </li>
        ) )}
      </ul>
    </div>
  );
};

export default Home;
