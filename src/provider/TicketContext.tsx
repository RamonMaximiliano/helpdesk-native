import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TicketContext = createContext(null);


type user = {
  id: number,
  password: string,
  email: string,
  status: boolean
}

type ticket = {
  id: number,
  title: string,
  description: string,
  userID: number
}

export const TicketProvider = ({ children }) => {
  const [newTicket, setNewTicket] = useState("");
  const [userTickets, setUserTickets] = useState([]);
  const [ticketsList, setTicketsList] = useState([]);
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState([]);



  return (
    <TicketContext.Provider
      value={{
        newTicket,
        setNewTicket,
        userTickets,
        setUserTickets,
        ticketsList,
        setTicketsList,
        user,
        setUser,
        users, 
        setUsers
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

/* 

export const TaskProvider = ({ children }) => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [edited, setEdited] = useState(null);
  

    const storeTasks = async (tasks) => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      } catch (e) {
        Toast.show({
          type: "error",
          text1: "Failed to save the tasks ❌",
        });
      }
    };
  

    
    const getList = async () => {
      try {
        const list = await AsyncStorage.getItem("tasks");
        if (list !== null) {
          setTasks(JSON.parse(list));
        }
      } catch (e) {
        Toast.show({
          type: "error",
          text1: "Failed to load the tasks ❌",
        });
      }
    };
  

    useEffect(() => {
      getList();
    }, []);
  

    function updateTask() {
      let checkExists = tasks.indexOf(newTask);
      if (edited !== null) {
        const updatedTasks = tasks.map((task) =>
          task === edited ? newTask : task
        );
        setTasks(updatedTasks);
        storeTasks(updatedTasks);
        setEdited(null);
        setNewTask("");
        Toast.show({
          type: "success",
          text1: "Task updated successfully ✅",
        });
      } else if (checkExists > -1) {
        Toast.show({
          type: "error",
          text1: "This task already exists 🚸",
        });
      } else {
        if (newTask) {
          const newTasks = [...tasks, newTask];
          setTasks(newTasks);
          storeTasks(newTasks);
          setNewTask("");
          Toast.show({
            type: "success",
            text1: "A New task has been added ✅",
          });
        } else {
          Toast.show({
            type: "error",
            text1: "Please write your task ✍️",
          });
        }
      }
    }
  
    // Function to clear the task list
    function clearList() {
      setTasks([]);
      AsyncStorage.removeItem("tasks");
      Toast.show({
        type: "success",
        text1: "Your task list has been cleared 🧹",
      });
    }
  

    function clearList() {
      setTasks([]);
      AsyncStorage.removeItem("tasks");
      Toast.show({
        type: "success",
        text1: "Your task list has been cleared 🧹",
      });
    }
  

    function deleteTask(e) {
      try {
        setTasks(
          tasks.filter((item) => {
            return item != e;
          })
        );
        storeTasks(tasks);
        Toast.show({
          type: "success",
          text1: "Task deleted 🗑️",
        });
      } catch (e) {
        Toast.show({
          type: "error",
          text1: "Something went wrong ❌",
        });
      }
    }
  

  
    function editTask(task) {
      setNewTask(task); // Set the task to the input field
      setEdited(task); // Store the original task to be edited
      Toast.show({
        type: "success",
        text1: "Edit your task ✏️",
      });
    }
  
    return (
      <TaskContext.Provider
        value={{
          newTask,
          setNewTask,
          tasks,
          setTasks,
          storeTasks,
          updateTask,
          clearList,
          deleteTask,
          editTask,
          edited,
        }}
      >
        {children}
      </TaskContext.Provider>
    );
  }; 
  
 */
