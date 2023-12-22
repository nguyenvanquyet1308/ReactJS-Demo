import React, { useState, useEffect } from "react";
import "./DemoTodoList.css";

function DemoTodoList() {
  //đọc dữ liệu từ localStorage
  const ReadData = JSON.parse(localStorage.getItem("Data"));

  const [text, setText] = useState("");
  const [add, setAdd] = useState(ReadData ?? []);
  //lưu vào localStorage
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(add));
  }, [add]);

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
