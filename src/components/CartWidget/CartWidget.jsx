import { StarIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

const CartWidget = () => {
  return (
    <Flex
      alignItems={"center"}
      marginRight={"30px"}
      justifyContent={"space-between"}
      width={"30px"}
    >
      <StarIcon />0
    </Flex>
  );
};

export default CartWidget;
