import React from "react";

export const ShowTask = ({ tasklist, setTaskList, task, setTask }) => {
  // hard coded data. No longer needed as we are mapping through taskList
  // const tasks = [
  //   { id: 10001, name: "TASK A", time: "3:42:01 PM 8/13/2023" },
  //   { id: 10002, name: "TASK B", time: "4:42:01 PM 8/13/2023" },
  //   { id: 10003, name: "TASK C", time: "5:42:01 PM 8/13/2023" },
  // ];

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter((todo) => todo.id !== id);
    setTaskList(updatedTaskList);
  };

  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);
    setTask(selectedTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTaskList([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((todo) => {
          return (
            <li key={todo.id}>
              <p>
                <span className="name">{todo.name}</span>
                <span className="time">{todo.time}</span>
              </p>
              <i
                onClick={() => handleEdit(todo.id)}
                className="bi bi-pencil-square"
              ></i>
              <i
                onClick={() => handleDelete(todo.id)}
                className="bi bi-trash"
              ></i>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
