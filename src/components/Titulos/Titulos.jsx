import { Center, Flex } from "@chakra-ui/react";
import { div } from "framer-motion/client";

export const Titulos = (props) => {
    const {h1,p}   = props;
    return (
        <div className="tituloPrincipal" >
            <h1>{h1}</h1>
        </div>
    )
        
    
}