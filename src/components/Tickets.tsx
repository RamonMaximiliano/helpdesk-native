import React from "react";
import { Box, Circle, HStack, Text, View, VStack, Pressable, IPressableProps } from "native-base";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

export type ticketProps = {
    id: string,
    text: string,
    status: boolean
}

type ticketDataProps = IPressableProps & {
    data: ticketProps;
}

const Inprocess = "#fba655"
const Completed = "#16f061"

export default function Tickets({ data, ...rest }: ticketDataProps) {
    return (
        <Pressable {...rest}>
            <HStack display="flex" flex={1} width={"355"} minHeight={16} bg={"gray.800"} alignItems={"center"} justifyContent={"space-between"} my={3} rounded="sm" mx={3} overflow="hidden">
                <Box h={"full"} bg={data.status ? Inprocess : Completed} w={3} borderTopLeftRadius="sm" borderBottomLeftRadius={"sm"} />
                <View textAlign={"left"} width={"280"} pl={2} py={2} >
                    <Text color="white" flexWrap={"wrap"}>
                        {data.text}
                    </Text>
                </View>
                <Circle bg={"gray.700"} w={12} h={12} borderRadius="100" p={1} mr={1}>
                    {data.status ? <FontAwesome5 name="hourglass" size={22} color="#fba655" /> : <AntDesign name="checkcircle" size={22} color="#16f061" />}
                </Circle>
            </HStack>
        </Pressable>
    )
};