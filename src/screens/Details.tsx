import React, { useState, useContext, useEffect } from "react";
import { VStack, Text, HStack, Input, Button } from "native-base";
import { useRoute } from "@react-navigation/native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TicketContext } from "../provider/TicketContext";
import { ticket } from "../provider/TicketContext";
import { Alert } from 'react-native';

type RouteParams = {
    id: string;
}
export default function Details() {
    const route = useRoute();
    const { id } = route.params as RouteParams;
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
    const { userTickets, setUserTickets, storeTickets } = useContext(TicketContext);
    const [ticketDetails, setTicketDetails] = useState<ticket | undefined>();
    const [resolution, setResolution] = useState("");

    function handleBack() {
        navigation.navigate("home");
    }

    function closeTicket() {
        const updatedUserTickets = userTickets.map((item) => {
            if (item.id != id) {
                return item
            } else {
                return { ...item, status: false, resolution: resolution };
            }
        })
        setUserTickets(updatedUserTickets)
        storeTickets(updatedUserTickets)
        Alert.alert("Ticket has been closed!")
        handleBack(); 
    }

    useEffect(() => {
        const detailedTicket = userTickets.find((item) => {
            return item.id === id
        })
        if (detailedTicket) {
            setTicketDetails(detailedTicket)
        }
    }, [id]);

    return (
        <VStack flex={1} bg="gray.900" flexDirection={"column"} px={5} justifyContent="space-between" pb={10}>
            <HStack display="flex" flexDirection={"row"} alignItems={"center"} color="white" fontSize="xl" h="110" pt={16} justifyContent="space-between" textAlign="center">
                <AntDesign name="left" size={24} color="white" w="50" onPress={handleBack} />
                <Text color="white" textAlign="center" fontSize="xl">Ticket details</Text>
                <AntDesign name="right" size={24} color="transparent" w="50" />
            </HStack>
            {ticketDetails?.status ? 

            <HStack display="flex" flexDirection={"row"} borderRadius="sm" alignItems={"center"} fontSize="xl" h="12" bg="gray.800" textAlign="center" w="full" justifyContent="center">
                <FontAwesome5 name="hourglass" size={22} color="#fba655" /> 
                <Text color="#fba655" textAlign="center" fontSize="xl" ml={4}>In Process</Text>
            </HStack>
            :       
             <HStack display="flex" flexDirection={"row"} borderRadius="sm" alignItems={"center"} fontSize="xl" h="12" bg="gray.800" textAlign="center" w="full" justifyContent="center">
                <AntDesign name="checkcircle" size={22} color="#16f061" />
                <Text color="#16f061" textAlign="center" fontSize="xl" ml={4}>Completed</Text>
             </HStack>
             }
            <Text textAlign="left" mb={-2} color="gray.400" fontSize="md">Title</Text>
            <HStack display="flex" flexDirection={"row"} borderRadius="sm" p={2} bg="gray.800"  color="white" fontSize="xl" h="60" textAlign="center">
                <Text color="white" textAlign="center" fontSize="xl">{ticketDetails?.title}</Text>
            </HStack>
            <Text color="gray.400"textAlign="left" mb={-2} fontSize="md">Description</Text>
            <HStack display="flex" flexDirection={"row"} borderRadius="sm" p={2} bg="gray.800" color="white" fontSize="xl" h="200" justifyContent="space-between" textAlign="center">
                <Text color="white" textAlign="center" fontSize="xl">{ticketDetails?.description}</Text>
            </HStack>
            {ticketDetails?.resolution == "" ?
                <>
                    <Input placeholder="Resolution" h="180" p={2} fontSize="xl" multiline textAlignVertical="top" color="white" onChangeText={(e) => setResolution(e)}></Input>
                    <VStack pt={5} alignItems={"center"} >
                        <Button onPress={closeTicket} background="#5960ff" width="full" fontSize="lg" p={4} _pressed={{ bg: "#7076FE" }}><Text fontSize="md" color="white">Close</Text></Button>
                    </VStack>
                </>
                :
                <>
                <Text color="gray.400" textAlign="left" mb={-2} fontSize="md">Resolution</Text>
                <HStack display="flex" flexDirection={"row"} borderRadius="sm" p={2} bg="gray.800" color="white" fontSize="xl" h="180" justifyContent="space-between" textAlign="center">
                    <Text color="white" textAlign="center" fontSize="xl">{ticketDetails?.resolution}</Text>
                </HStack>
                </>
            }
        </VStack>
    )
};