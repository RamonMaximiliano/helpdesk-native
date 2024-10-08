import React from "react";
import { VStack, Text, Input, Button, HStack } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function New() {
    return (
        <VStack flex={1} bg="gray.900" flexDirection={"column"} px={5} justifyContent="space-between" pb={10}>
            <HStack display="flex" flexDirection={"row"} alignItems={"center"} color="white" fontSize="xl" h="120" pt={16} justifyContent="space-between" textAlign="center">
                <AntDesign name="left" size={24} color="white" w="50" />
                <Text color="white" textAlign="center" fontSize="xl">New ticket</Text>
                <AntDesign name="right" size={24} color="transparent" w="50" />
            </HStack>
            <Input placeholder="Title" h="60" my={2}></Input>
            <Input placeholder="Description" h="450"></Input>
            <VStack pt={5} alignItems={"center"} >
                <Button background="#5960ff" width="full" fontSize="lg" p={4} _pressed={{ bg: "#7076FE" }}><Text fontSize="md" color="white">Create</Text></Button>
            </VStack>
        </VStack>
    )
};