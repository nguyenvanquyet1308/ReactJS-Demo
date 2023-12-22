import React, { useState, useEffect } from "react";

import "./DemoTodoList.css";
function DemoTodoList() {
  useEffect(() => {
    const dataItem = localStorage.getItem("myData");
    if (dataItem) {
      setAdd(JSON.parse(dataItem));
    }
  }, []);

  const [text, setText] = useState("");
  const [add, setAdd] = useState([]);
  const AddOfPerson = (id) => {
    if (text.trim() === "") {
      alert("Nhập vào đi thằng ngu");
      return;
    }
    const randomNum = Math.floor(Math.random() * 100000000000);
    console.log(randomNum);
    const addItem = {
      id: randomNum,
      name: text,
    };
    setAdd([...add, addItem]);
  };
  const deleteItem = (id) => {
    const deleteofItem = add.filter((add) => add.id !== id);
    setAdd(deleteofItem);
  };
  return (
    <div className="TodoList">
      <input
        type="text"
        placeholder="điền vô đây...."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => AddOfPerson()}>add</button>
      <div>
        {add.map((item, index) => {
          return (
            <div id={item.id} key={item.id}>
              {item.name}
              <button className="delete" onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DemoTodoList;
