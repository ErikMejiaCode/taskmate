import React from "react";

export const AddTask = ({ taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };
    setTaskList([...taskList, newTask]);
    e.target.task.value = "";
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          name="task"
          autoComplete="off"
          maxLength="25"
        />
        <button type="submit">Add</button>
      </form>
    </section>
  );
};
