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
  resolution: string,
  status:boolean,
  userID: string
}

export const TicketProvider = ({ children }) => {
  const [userTickets, setUserTickets] = useState<ticket[]>([]);
  const [user, setUser] = useState<user>();
  const [users, setUsers] = useState<user[]>([]);

  /*1 FUNCTION - SAVE USERS IN LOCALSTORAGE*/
  function storeUsers(users){
    try {
      AsyncStorage.setItem("usersList", JSON.stringify(users));
    } catch (e) {
      Alert.alert("Failed to save users! ❌")
    }
  };

 /*2 FUNCTION - GET USERS FROM LOCALSTORAGE*/
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

  useEffect(() => {
    getUsers();
  }, []);


    /*3 FUNCTION - SAVE TICKETS IN LOCALSTORAGE*/
    function storeTickets(userTickets){
      try {
        AsyncStorage.setItem("userTickets", JSON.stringify(userTickets));
      } catch (e) {
        Alert.alert("Failed to save users! ❌")
      }
    };


     /*4 FUNCTION - GET TICKETS FROM LOCALSTORAGE*/
  const getTickets = async () => {
    try {
      const ticketsList = await AsyncStorage.getItem("userTickets");
      if (ticketsList !== null) {
        setUserTickets(JSON.parse(ticketsList));
      }
    } catch (e) {
      Alert.alert("Failed to get tickets! ❌")
    }
  };

  useEffect(() => {
    getTickets();
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
        userTickets,
        setUserTickets,
        user,
        setUser,
        users, 
        setUsers,
        storeUsers,
        storeTickets,
        deleteUsers
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
