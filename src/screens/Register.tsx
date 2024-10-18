import React, { useContext, useState } from "react";
import { VStack, Heading, Text, Input, Button, HStack } from "native-base";
import { Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { TicketContext } from "../provider/TicketContext";
import { TouchableOpacity } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { user } from "../provider/TicketContext";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const {users, setUsers, storeUsers } = useContext(TicketContext);
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    function handleRegister() {
        const findUser = users.find((user: user) => {
            return user.email === email
        })

        if (!findUser) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (email === "" || !email.trim()) {
                Alert.alert("Please provide a valid e-mail!");
                return;
            }
            if (!emailRegex.test(email)) {
                Alert.alert("Please provide a valid e-mail!");
                return;
            }
            if (password !== confirmpassword) {
                Alert.alert("The passwords don't match!");
                return;
            }
        } else {
            Alert.alert("There is already a user with this e-mail!")
        }

        const newUser: user = {
            id: Date.now().toString(),
            email: email,
            password: password,
        };

        setUsers([...users, newUser]);
        storeUsers([...users, newUser]);
        console.log(users)
        Alert.alert("User created successfully!");
        setEmail("")
        setPassword("password1")
        setConfirmpassword("password2")
        log()
    }

    function log() {
        navigation.navigate("login");
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.800" px={8} pt={24}>
            <AntDesign name="customerservice" size={45} color="white" marginBottom={15} marginTop={15} />
            <Heading color="gray.400" fontSize="3xl" marginBottom={85}>Help<Text color="#5960ff">Desk </Text><Text color="white">Native</Text></Heading>
            <Text color="white" marginBottom={8} fontSize="lg">Register your new account</Text>
            <Input placeholder="Email" value={email} width="xs" fontSize="md" p={3} marginBottom={15} bg="gray.900" InputLeftElement={<Fontisto name="email" size={20} color="white" marginLeft={18} />} onChangeText={(e) => setEmail(e)} color="white" _focus={{
                borderWidth: 1,
                borderColor: "purple.400",
                bg: "gray.900",
            }} />
            <Input placeholder="Password" value={password} width="xs" fontSize="md" p={3} marginBottom={15} bg="gray.900" InputLeftElement={<FontAwesome5 name="key" size={20} color="white" marginLeft={18} />} onChangeText={(e) => setPassword(e)} color="white" secureTextEntry _focus={{
                borderWidth: 1,
                borderColor: "purple.400",
                bg: "gray.900",
            }} />
            <Input placeholder="Confirm password" value={confirmpassword} width="xs" fontSize="md" p={3} marginBottom={30} bg="gray.900" InputLeftElement={<FontAwesome5 name="key" size={20} color="white" marginLeft={18} />} onChangeText={(e) => setConfirmpassword(e)} color="white" secureTextEntry _focus={{
                borderWidth: 1,
                borderColor: "purple.400",
                bg: "gray.900",
            }} />
            <Button background="#5960ff" width="xs" fontSize="lg" p={4} onPress={handleRegister} _pressed={{ bg: "#7076FE" }}><Text fontSize="md" color="white">Register</Text></Button>
            <HStack width="95%" alignItems="center" display={"flex"} justifyContent={"space-between"}>
                <Text marginTop={10} style={{ color: 'white' }}>Already have an account?</Text>
                <TouchableOpacity onPress={log} >
                    <Text marginTop={10} style={{ color: '#989dfb', fontWeight: 'bold', fontSize: 15 }}>Login now</Text>
                </TouchableOpacity>
            </HStack>
        </VStack>
    )
};