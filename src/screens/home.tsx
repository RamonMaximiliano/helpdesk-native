import React, { useEffect, useContext, useState } from "react";
import { VStack, Heading, Text, Input, Button, HStack, View, FlatList, Center } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable } from "react-native";
import Tickets from "../components/Tickets";
import { ticketProps } from "../components/Tickets";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TicketContext } from "../provider/TicketContext";
import { ticket, user } from "../provider/TicketContext";

export default function Home() {
    const [statusColor, setStatusColor] = useState(true);
    const [statusColorOpen, setStatusColorOpen] = useState("#fba655");
    const [statusColorComple, setStatusColorComple] = useState("#16f061");
    const [filteredListFilter, setFilteredListFilter] = useState<ticketProps[]>([])

    const Inprocess = "#fba655"
    const Completed = "#16f061"
    const neutral = "#b6b6b6"
    const { user, setUser, userTickets } = useContext(TicketContext);

    useEffect(() => {
        handleFilterOpen();
      }, [userTickets]);

    function handleFilterOpen() {
        setStatusColor(!statusColor)
        const filteredList = userTickets?.filter((item:ticket) => {
            return item?.status === true && item?.userID === user.id
        })
        setFilteredListFilter(filteredList)
        setStatusColorOpen("#fba655")
        setStatusColorComple("#b6b6b6")
    }

    function handleFilterCompleted() {
        setStatusColor(!statusColor)
        const filteredList = userTickets?.filter((item) => {
            return item?.status === false && item?.userID === user.id
        })
        setFilteredListFilter(filteredList)
        setStatusColorOpen("#b6b6b6")
        setStatusColorComple("#16f061")
    }

    function handleLogOut() {
        navigateLogOut();
        setUser();
    }

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    function handleNewOrder() {
        navigation.navigate("new");
    }
    function handleDetails(id: string) {
        navigation.navigate("details", { id });
    }
    function navigateLogOut() {
        navigation.navigate("login");
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.900" pb={10}>
            <HStack bg="gray.800" height={140} width={"full"} alignItems={"center"} justifyContent={"space-between"} px={5} pt={9} textAlign={"center"}>
                <VStack display="flex" flexDirection={"row"} alignItems={"center"}>
                    <AntDesign name="customerservice" size={30} color="white" marginRight={15} />
                    <Heading color="gray.400" fontSize="2xl">Help<Text color="#5960ff">Desk </Text><Text color="white">Native</Text></Heading>
                </VStack>
                <Pressable onPress={handleLogOut}>
                    <MaterialIcons name="logout" size={30} color="white" />

                </Pressable>
            </HStack>
            <HStack display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} width={"full"} px={5} pt={9}>
                <Text color="white" fontSize="xl">Tickets</Text>
                <Text color="white" fontSize="xl">{filteredListFilter.length}</Text>
            </HStack>
            <HStack display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} width={"full"} px={5} pt={9}>
                <Pressable onPress={handleFilterOpen}>
                    <Text color={statusColorOpen} fontSize="md" borderWidth="1" textAlign={"center"} borderColor={statusColorOpen} borderRadius="sm" p={2} width={"40"}>In process</Text>
                </Pressable>
                <Pressable onPress={handleFilterCompleted}>
                    <Text color={statusColorComple} fontSize="md" borderWidth="1" textAlign={"center"} borderColor={statusColorComple} borderRadius="sm" p={2} width={"40"}>Completed</Text>
                </Pressable>
            </HStack>
            <FlatList
                data={filteredListFilter}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Tickets data={item} onPress={() => handleDetails(item.id)} />
                }

                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                pt={5}
                ListEmptyComponent={() => (<Center alignItems="center" mt={5} >
                    <AntDesign name="customerservice" size={35} color="gray" />
                    <Text mt={5} textAlign="center" fontSize="lg" color="gray.400">You don't have {'\n'} {statusColor ? "open" : "completed"} tickets</Text>
                </Center>)}
            />
            <VStack pt={5}>
                <Button background="#5960ff" width="xs" fontSize="lg" p={4} _pressed={{ bg: "#7076FE" }} onPress={handleNewOrder}><Text fontSize="md" color="white" >New ticket</Text></Button>
            </VStack>
        </VStack>
    )
};



/* 

Fixed the issue with the typing of the useNavigate hook
https://stackoverflow.com/questions/73861337/no-overload-matches-this-call-error-react-native-navigation 

--------------------------------------------------------------------
When using native-stack, typing usage will look like this:

import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const Component = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  //...
}
--------------------------------------------------------------------


*/