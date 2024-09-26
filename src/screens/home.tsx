import React, { useState } from "react";
import { VStack, Heading, Text, Input, Button, HStack } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function Home() {
    return (
        <VStack flex={1} alignItems="center" bg="gray.900">
            <HStack bg="gray.800" height={140} width={"full"} alignItems={"center"} justifyContent={"space-between"} px={5} pt={9} textAlign={"center"}>
                <VStack display="flex" flexDirection={"row"} alignItems={"center"}>
                    <AntDesign name="customerservice" size={30} color="white" marginRight={15} />
                    <Heading color="gray.400" fontSize="2xl">Help<Text color="#5960ff">Desk </Text><Text color="white">Native</Text></Heading>
                </VStack>
                <MaterialIcons name="logout" size={30} color="white" />
            </HStack>

            <VStack display="flex" flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"} width={"full"} px={5} pt={9}>
                <Text color="white" fontSize="xl">Tickets</Text>
                <Text color="white" fontSize="xl">5</Text>
            </VStack>
        </VStack>
    )
};
