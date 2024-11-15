import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from "@chakra-ui/icons"
const Logo = (props) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M34.87 8.07H37.87V20.2H34.87V8.07ZM39.06 15.62C39.06 12.62..." fill="currentColor" />
      <path d="M26.48 8.62001C25.97 7.46...13.07 27.55C17.65 27.54..." fill="#2F855A" />
    </svg>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={8}
      h={8}
      cursor="pointer"
      as="a"
      href={href}
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{ bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200') }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight="500" fontSize="lg" mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW="6xl" py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize="sm">© 2022 Chakra Templates. All rights reserved</Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Company</ListHeader>
            <Box as="a" href="#">About us</Box>
            <Box as="a" href="#">Blog</Box>
            <Box as="a" href="#">Contact us</Box>
            <Box as="a" href="#">Pricing</Box>
            <Box as="a" href="#">Testimonials</Box>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Support</ListHeader>
            <Box as="a" href="#">Help Center</Box>
            <Box as="a" href="#">Terms of Service</Box>
            <Box as="a" href="#">Legal</Box>
            <Box as="a" href="#">Privacy Policy</Box>
            <Box as="a" href="#">Status</Box>
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction="row">
              <Input
                placeholder="Your email address"
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{ bg: 'whiteAlpha.300' }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{ bg: 'green.600' }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}