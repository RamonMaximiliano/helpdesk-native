import React, { useState } from "react";
import { VStack, Heading, Text, Input, Button } from "native-base";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <VStack flex={1} alignItems="center" bg="gray.800" px={8} pt={24}>
            <AntDesign name="customerservice" size={45} color="white" marginBottom={15} marginTop={15}/>            
            <Heading color="gray.400" fontSize="3xl" marginBottom={85}>Help<Text color="#7076FE">Desk </Text><Text color="white">Native</Text></Heading>
            <Text color="white"marginBottom={8} fontSize="lg">Acesse sua conta </Text>
            <Input placeholder="E-mail" width="xs" fontSize="md" p={3} marginBottom={15} bg="gray.900"/>
            <Input placeholder="Password" width="xs" fontSize="md" p={3} marginBottom={30}  bg="gray.900"/>
            <Button background="#7076FE" width="xs" fontSize="lg" p={4}><Text fontSize="md" color="white">Entrar</Text></Button>
        </VStack>
    )
};
