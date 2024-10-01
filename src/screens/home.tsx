import React, { useState } from "react";
import { VStack, Heading, Text, Input, Button, HStack, View } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable } from "react-native"; 

export default function Home() {
    const [statusColor, setStatusColor] = useState(true);

    const Inprocess = "#fba655"
    const Completed = "#16f061"
    const neutral = "#b6b6b6"

    function handleFilter(){
        setStatusColor(!statusColor)
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.900">
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
                <Pressable onPress={handleFilter}>
                    <Text color={statusColor ? Inprocess : neutral} fontSize="md" borderWidth="1" textAlign={"center"}   borderColor={statusColor ? Inprocess : neutral}borderRadius="sm" p={2} width={"40"}>In process</Text>
                </Pressable>
                <Pressable onPress={handleFilter}>
                    <Text color={!statusColor ? Completed : neutral} fontSize="md" borderWidth="1" textAlign={"center"}   borderColor={!statusColor ? Completed : neutral}  borderRadius="sm" p={2} width={"40"}>Completed</Text>
                </Pressable>
            </HStack>
        </VStack>
    )
};
