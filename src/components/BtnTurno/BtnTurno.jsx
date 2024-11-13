import React from 'react';
import { Box, Button, Text, keyframes } from '@chakra-ui/react';

const pulsate = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const BtnTurno = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      w="150px"
      h="150px"
      borderRadius="full"
      animation={`${pulsate} 2s infinite`}
      _hover={{
        animation: 'none',
        transform: 'scale(1.1)',
      }}
    >
      <Button
        as="a"
        href="#"
        borderRadius="full"
        p="4"
        fontSize="lg"
        border="2px solid white"
        bg="transparent"
        _hover={{
          bg: 'whiteAlpha.300',
          color: 'white',
          transition: 'background 0.3s ease',
        }}
      >
        <Text color="white">Reservá tu turno</Text>
      </Button>
    </Box>
  );
};

export default BtnTurno;