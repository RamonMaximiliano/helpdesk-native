import React from "react";
import { VStack, Heading, Text} from "native-base";
import { useRoute } from "@react-navigation/native";


type RouteParams = {
    id:string;
}
export default function Details() {
    const route = useRoute();
    const {id} = route.params as RouteParams;
    return (
        <VStack>
            <Heading ><Text>{id}</Text></Heading>
        </VStack>
    )
};