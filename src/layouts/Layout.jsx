import { Flex } from "@chakra-ui/react";
import NavBar from "../components/NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection={"column"}>
      <NavBar />
      {children}
    </Flex>
  );
};

export default Layout;