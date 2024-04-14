import React from "react";
import { Box, Flex, Spacer, Heading, Link } from "@chakra-ui/react";
import CardList from "./Components/CardList";

function App() {
  return (
    <div>
     
      <Flex
        bg="blue.300"
        p="4"
        alignItems="center"
        position="fixed" 
        top="0" 
        left="0" 
        right="0"
        zIndex="999" 
      >
        <Box p="2">
          <Heading size="md" color="white">
            GAMYAM
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Link href="#" color="white" mr="4">
            Home
          </Link>
          <Link href="#" color="white">
            About
          </Link>
        </Box>
      </Flex>

     
      <Box mt="20"> 
     
        <CardList />
      </Box>
    </div>
  );
}

export default App;

