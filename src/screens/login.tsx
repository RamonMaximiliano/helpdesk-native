import React, { useState } from "react";
import { VStack, Heading, Text, Input, Button, HStack } from "native-base";
import { TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin() {
        console.log(email, password)
    }

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    function register() {
        navigation.navigate("register");
    }

    return (
        <VStack flex={1} alignItems="center" bg="gray.800" px={8} pt={24}>
            <AntDesign name="customerservice" size={45} color="white" marginBottom={15} marginTop={15} />
            <Heading color="gray.400" fontSize="3xl" marginBottom={85}>Help<Text color="#5960ff">Desk </Text><Text color="white">Native</Text></Heading>
            <Text color="white" marginBottom={8} fontSize="lg">Access your account</Text>
            <Input placeholder="E-mail" width="xs" fontSize="md" p={3} marginBottom={15} bg="gray.900" InputLeftElement={<Fontisto name="email" size={20} color="white" marginLeft={18} />} onChangeText={(e) => setEmail(e)} color="white" _focus={{
                borderWidth: 1,
                borderColor: "purple.400",
                bg: "gray.900",
            }} />
            <Input placeholder="Password" width="xs" fontSize="md" p={3} marginBottom={30} bg="gray.900" InputLeftElement={<FontAwesome5 name="key" size={20} color="white" marginLeft={18} />} onChangeText={(e) => setPassword(e)} color="white" secureTextEntry _focus={{
                borderWidth: 1,
                borderColor: "purple.400",
                bg: "gray.900",
            }} />

            <Button background="#5960ff" width="xs" fontSize="lg" p={4} onPress={handleLogin} _pressed={{ bg: "#7076FE" }}><Text fontSize="md" color="white">Login</Text></Button>
            <HStack  width="95%" alignItems="center" display={"flex"} justifyContent={"space-between"}>
                <Text marginTop={10} style={{ color: 'white'}}>
                    Don't have an account?
                </Text>
                <TouchableOpacity onPress={register} >
                    <Text marginTop={10} style={{ color: '#989dfb', fontWeight: 'bold',  fontSize: 15  }}>
                        Signup now
                    </Text>
                </TouchableOpacity>
            </HStack>
        </VStack>
    )
};


/*

secureTextEntry = this property in an input element makes the characters typed appear as dots instead, ideal for password inputs

THESE ARE SEMI-PROPERTIES THAT ARE APPLIED IN SPECIFIC ACTIONS BY THEIR DESCRIPTION:
_focus
_pressed

*/