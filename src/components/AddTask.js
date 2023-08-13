import React from "react";

export const AddTask = ({ taskList, setTaskList, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.id) {
      const date = new Date();
      const updateTaskList = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : { id: todo.id, name: todo.name, time: todo.time }
      );
      setTaskList(updateTaskList);
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...taskList, newTask]);
      e.target.task.value = "";
    }
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          value={task.name}
          type="text"
          placeholder="add task"
          name="task"
          autoComplete="off"
          maxLength="25"
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
};
