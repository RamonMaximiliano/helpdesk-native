import React, { useEffect, useState } from "react";
import { VStack, Heading, Text, Input, Button, HStack, View, FlatList, Center } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable } from "react-native";
import Tickets from "../components/Tickets";
import { ticketProps } from "../components/Tickets";

export default function Home() {
    const [statusColor, setStatusColor] = useState(true);
    const [statusColorOpen, setStatusColorOpen] = useState("#fba655");
    const [statusColorComple, setStatusColorComple] = useState("#16f061");
    const [filteredListFilter, setFilteredListFilter] = useState<ticketProps[]>([])
    const [dataList, setDataList] = useState<ticketProps[]>([
           {
              id: "1",
              text: "hello false",
              status: false
          },
          {
              id: "12",
              text: "hello now",
              status: true
          },
          {
              id: "132",
              text: "hello false",
              status: false
          },
          {
              id: "1212",
              text: "hello now",
              status: true
          },
          {
              id: "121212",
              text: "hello false",
              status: false
          }
    ]);

    const Inprocess = "#fba655"
    const Completed = "#16f061"
    const neutral = "#b6b6b6"

    function handleFilterOpen() {
        setStatusColor(!statusColor)
        const filteredList  = dataList.filter((item)=>{
            return item.status === true
        })
        setFilteredListFilter(filteredList)
        setStatusColorOpen("#fba655")
        setStatusColorComple("#b6b6b6")
    }

    function handleFilterCompleted() {
        setStatusColor(!statusColor)
        const filteredList  = dataList.filter((item)=>{
            return item.status === false
        })
        setFilteredListFilter(filteredList)
        setStatusColorOpen("#b6b6b6")
        setStatusColorComple("#16f061")
    }

    useEffect(()=>{
        handleFilterOpen()
    },[])

    return (
        <VStack flex={1} alignItems="center" bg="gray.900" pb={10}>
            <HStack bg="gray.800" height={140} width={"full"} alignItems={"center"} justifyContent={"space-between"} px={5} pt={9} textAlign={"center"}>
                <VStack display="flex" flexDirection={"row"} alignItems={"center"}>
                    <AntDesign name="customerservice" size={30} color="white" marginRight={15} />
                    <Heading color="gray.400" fontSize="2xl">Help<Text color="#5960ff">Desk </Text><Text color="white">Native</Text></Heading>
                </VStack>
                <MaterialIcons name="logout" size={30} color="white" />
            </HStack>
            <HStack display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} width={"full"} px={5} pt={9}>
                <Text color="white" fontSize="xl">Tickets</Text>
                <Text color="white" fontSize="xl">5</Text>
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
                renderItem={({ item }) => <Tickets data={item} />
                }
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
                pt={5}
                ListEmptyComponent={() => (<Center alignItems="center" mt={5} >
                    <AntDesign name="customerservice" size={35} color="gray" />
                    <Text mt={5} textAlign="center" fontSize="lg" color="gray.400">You don't have {'\n'} {statusColor ? "open" : "completed" } tickets</Text>
                </Center>)}
            />
            <VStack pt={5}>
                <Button background="#5960ff" width="xs" fontSize="lg" p={4} _pressed={{ bg: "#7076FE" }}><Text fontSize="md" color="white">New ticket</Text></Button>
            </VStack>
        </VStack>
    )
};
