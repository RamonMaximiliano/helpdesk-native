import React from "react";
import { HStack, Text } from "native-base";

export type ticketProps = {
    id: string,
    text: string,
    status: boolean
}

type ticketDataProps = {
    data: ticketProps;
}

export default function Tickets({ data, ...rest }: ticketDataProps) {
    return (
        <HStack>
            <Text color="white">
                { data.text }            
            </Text>
        </HStack>
    )
};