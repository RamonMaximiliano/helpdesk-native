import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from 'react-native';

export const TicketContext = createContext(null);

export type user = {
  id: string,
  password: string,
  email: string,
}

export type ticket = {
  id: string,
  title: string,
  description: string,
  userID: string
}

export const TicketProvider = ({ children }) => {
  const [newTicket, setNewTicket] = useState<ticket>();
  const [userTickets, setUserTickets] = useState([]);
  const [ticketsList, setTicketsList] = useState([]);
  const [user, setUser] = useState();
  const [users, setUsers] = useState([]);

  /*1 FUNCTION*/
  function storeUsers(users){
    try {
      AsyncStorage.setItem("usersList", JSON.stringify(users));
    } catch (e) {
      Alert.alert("Failed to save users! ❌")
    }
  };


 /*2 FUNCTION*/
  const getUsers = async () => {
    try {
      const usersList = await AsyncStorage.getItem("usersList");
      if (usersList !== null) {
        setUsers(JSON.parse(usersList));
      }
    } catch (e) {
      Alert.alert("Failed to get users! ❌")
    }
  };

  /*3 FUNCTION*/
  useEffect(() => {
    getUsers();
  }, []);

  /*4 FUNCTION*/
  function deleteUsers(){
    setUsers([])
    try {
      AsyncStorage.removeItem("usersList");
      Alert.alert("Users removed successfully!")
    } catch (e) {
      Alert.alert("Failed to save users! ❌")
    }
  };

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
        setUsers,
        storeUsers,
        deleteUsers
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
