import { Center, Spinner } from "native-base";

export function Loading(){
    return(
        <Center flex={1} bg="gray.800">
            <Spinner color="white"/>
        </Center>
    )
}