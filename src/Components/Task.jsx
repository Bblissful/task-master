import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [editingIndex, setEditingIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const [timerId, setTimerId] = useState(null);
  const [showTimer, setShowTimer] = useState(true); // Added showTimer state

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    setTimerId(timer);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleAddTask = () => {
    if (!newTaskTitle || !newTaskDescription || !newTaskDueDate) {
      return;
    }

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      description: newTaskDescription,
      dueDate: newTaskDueDate,
      status: "In progress",
    };

    if (editingTask) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex] = newTask;
      setTasks(updatedTasks);
      setEditingTask(null);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, newTask]);
    }

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
        const extendedDueDate = new Date(task.dueDate);
        extendedDueDate.setHours(extendedDueDate.getHours() + 1);

        return { ...task, dueDate: extendedDueDate.toISOString() };
      }
      return task;
    });

    setTasks(updatedTasks);
    alert("Task extended by 1 hour");
  };

  const isTaskCancelled = (dueDate) => {
    const taskDueDate = new Date(dueDate).getTime();
    return taskDueDate < currentTime;
  };

  const getTimeRemaining = (dueDate) => {
    const dueDateTime = new Date(dueDate).getTime();
    const difference = dueDateTime - currentTime;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return `${years}y ${hours}h ${minutes}m ${seconds}s`;
  };

  const handleEditTask = (index) => {
    const task = tasks[index];
    setEditingTask(task);
    setEditingIndex(index);
    setNewTaskTitle(task.title);
    setNewTaskDescription(task.description);
    setNewTaskDueDate(task.dueDate);
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: "Completed" };
      }
      return task;
    });

    setTasks(updatedTasks);
    clearInterval(timerId);
    setShowTimer(false); // Hide the timer
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="md:text-2xl font-bold mb-4 md:py-6">
        Welcome to Task Master
      </h2>

      <div className="mb-4">
        <form className="flex md:w-[50%] justify-center border border-[#0504AA] bg-gray-200 rounded-xl">
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
            {editingTask ? "Edit Task" : "Add Task"}
          </button>
        </div>
      </div>

      <div>
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`mb-4 p-4 border ${
              isTaskCancelled(task.dueDate) ? "task-due" : ""
            }`}>
            <h3
              className={`text-xl font-bold mb-2 ${
                isTaskCancelled(task.dueDate) ? "task-due-title" : ""
              }`}
              style={{
                textDecoration: isTaskCancelled(task.dueDate)
                  ? "line-through"
                  : "none",
              }}>
              {task.title}
            </h3>
            <p
              className={`mb-2 ${
                isTaskCancelled(task.dueDate) ? "task-due-description" : ""
              }`}
              style={{
                textDecoration: isTaskCancelled(task.dueDate)
                  ? "line-through"
                  : "none",
              }}>
              {task.description}
            </p>
            <p className="mb-2">Status: {task.status}</p>
            <p className="mb-2">Due Date: {task.dueDate}</p>
            {isTaskCancelled(task.dueDate) && <p className="mb-2">Task Due!</p>}
            {isTaskCancelled(task.dueDate) && task.status !== "Completed" && (
              <div className="flex">
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
                  onClick={() => handleCompleteTask(task.id)}>
                  Complete
                </button>
                <button
                  className="bg-red-500 text-white py-1 px-3 rounded"
                  onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </button>
                <button
                  className="bg-blue-500 text-white py-1 px-3 rounded ml-auto"
                  onClick={() => handleEditTask(index)}>
                  Edit
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

            <div className="mt-2">
              {showTimer && (
                <>Time Remaining: {getTimeRemaining(task.dueDate)}</>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
