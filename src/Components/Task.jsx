import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (!newTaskTitle || !newTaskDescription || !newTaskDueDate) {
      return;
    }

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      description: newTaskDescription,
      dueDate: newTaskDueDate,
      status: "Not started",
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDescription("");
    setNewTaskDueDate("");
  };

  const handleStatusChange = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleExtendTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId && isTaskCancelled(task.dueDate)) {
        return { ...task, status: "Not started" };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const isTaskCancelled = (dueDate) => {
    const now = new Date();
    const taskDueDate = new Date(dueDate);
    return taskDueDate < now;
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="md:text-2xl font-bold mb-4 md:py-6">
        Welcome to Task Master
      </h2>

      <div className="mb-4">
        <form className="flex md:w-[50%] justify-center border border-[#0504AA] bg-gray-200 rounded-xl ">
          <input
            type="text"
            placeholder="Task Title"
            className="bg-gray-300 text-center rounded py-3 px-1 m-2"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <textarea
            placeholder="Task details"
            className="bg-gray-300 text-center rounded px-1 m-2"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
        </form>
        <p className="py-3 md:py-7 font-bold">Due date and time</p>
        <form className="flex justify-center border border-[#0504AA] bg-gray-200 rounded-xl md:w-[50%]">
          <input
            type="datetime-local"
            className="bg-gray-300 text-center rounded px-1 m-2 text-lg text-gray-500"
            value={newTaskDueDate}
            onChange={(e) => setNewTaskDueDate(e.target.value)}
          />
        </form>
        <div className="button justify-center text-center md:text-left">
          <button
            type="button"
            className="bg-[#0504AA] text-white py-1 px-5 rounded m-6"
            onClick={handleAddTask}>
            Add Task
          </button>
        </div>
      </div>

      <div>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`mb-4 p-4 border ${
              isTaskCancelled(task.dueDate) ? "task-due" : ""
            }`}>
            <h3
              className={`text-xl font-bold mb-2 ${
                isTaskCancelled(task.dueDate) ? "task-due-title" : ""
              }`}>
              {task.title}
            </h3>
            <p
              className={`mb-2 ${
                isTaskCancelled(task.dueDate) ? "task-due-description" : ""
              }`}>
              {task.description}
            </p>
            <p className="mb-2">Status: {task.status}</p>
            <p className="mb-2">Due Date: {task.dueDate}</p>
            {isTaskCancelled(task.dueDate) && <p className="mb-2">Task Due!</p>}
            {isTaskCancelled(task.dueDate) && task.status !== "Completed" && (
              <div className="flex">
                <button
                  className="bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                  onClick={() => handleExtendTask(task.id)}>
                  Continue Task
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded"
                  onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
              </div>
            )}
            {!isTaskCancelled(task.dueDate) && task.status !== "Completed" && (
              <div className="flex">
                <button
                  className="bg-green-500 text-white py-1 px-3 rounded mr-2"
                  onClick={() => handleStatusChange(task.id, "In progress")}>
                  In Progress
                </button>
                <button
                  className="bg-[#0504AA] text-white py-1 px-3 rounded mr-2"
                  onClick={() => handleStatusChange(task.id, "Completed")}>
                  Completed
                </button>
              </div>
            )}
            {!isTaskCancelled(task.dueDate) && task.status === "Completed" && (
              <button
                className="bg-red-500 text-white py-1 px-3 rounded"
                onClick={() => handleDeleteTask(task.id)}>
                Delete
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
