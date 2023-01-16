import style from './App.module.css';
import { useState } from "react";
import { Task } from './Task';

// Learn States

/* 
Dalam React untuk komponen UI hanya di render 1 kali.
*/

/* function App() {
  const [showText, setShowText] = useState(true)
  const [textColor, setTextColor] = useState("black")

  const changeText = () => {
    setShowText(!showText);
    setTextColor(textColor === "black" ? "black" : "red");

  };

  return (
    <div className={style.App}>
      <button onClick={changeText}> Show/Hide </button>
      {showText === true && <h1 style={{color: textColor}}> Heloo, my name is Felix </h1>}
    </div>
  );
} */

/* function App() {
  // Exercise 
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const zeroCount = () => {
    setCount(0);
  }

  return (
    <div className={style.App}>
      <button onClick = {increaseCount} > Increase </button>
      <button onClick = {decreaseCount}> Decrease </button>
      <button onClick = {zeroCount}> Set to Zero </button>
      {count}
    </div>
  );
}
*/

function App() {

  // Learn CRUD and Array or List
  const [doList, setDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    // '...' menandakan membuat array kosong dan parameter kedua adalah valuenya
    // Objek
    const task = {
      id: doList.length === 0 ? 1 : doList[doList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }

    const newTodoList = [...doList, task];
    setDoList(newTodoList);
  }

  // Exercise Update
  const updateTask = (id) => {
    setDoList(doList.map((task) => {
      if (task.id === id){
        return {...task, completed: true};
      } else {
        return task;
      }
    }));
  }
  const deleteTask = (id) => {

    // Cara 1
    /*const newTodoList = doList.filter((task) => {
      if (task === taskName) {
        return false;
      } else {
        return true;
      }
    }); */

    // Cara 2
    // mempersingkat if else 
    /*const newTodoList = doList.filter((task) => {
      return task !== taskName;
    }); */
    // setDoList(newTodoList);

    //Cara 3
    setDoList(doList.filter((task) => task.id !== id));
  }

  return (
    <div className={style.App}>
      <div className={style.Header}>
        <div className={style.Input}>
          <input style={{ margin: 10 }} onChange={handleChange} />
          <button onClick={addTask}> Add Task </button>
        </div>
      </div>


      {doList.map((task) => {
        return (
          <div className={style.List}>
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              updateTask={updateTask} />
          </div>
        )
      })}
    </div>
  );
}

export default App;