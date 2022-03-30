import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  SimpleGrid,
  Container,
  useColorMode,
  Icon,
  Spinner,
  Divider,
  BeatLoader,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
  Image,
  VStack,
  Code,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
//import { Logo } from './Logo';
import img from "./tyler.jpeg";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <>
        <main>
          <Box maxWidth="900px" m="auto" pr="20px" pl="20px">
            <Box bg="rgb(252,106,0,.7)" p="25px" mb="20px"></Box>
            <Grid
              templateColumns={[
                "repeat(1, 1fr)",
                "repeat(1, 1fr)",
                "repeat(3, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={20}
            >
              <GridItem colSpan={2} w="100%">
                <Heading pt="0px" align="top">
                  Tyler Matrix{" "}
                  <Link href="https://github.com/tylermatrix" isExternal>
                    <Icon as={FaGithub} name="github" />
                  </Link>
                </Heading>
                <Divider mb="30px" />
                <Flex alignItems="center" justify="space-between">
                  <Text mb="10px" fontWeight="bold" fontSize="2xl">
                    Summary Statement
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(252,106,0,.3)"></Box>
                </Flex>

                <Text mb="10px">
                  A passion for web development and anything game related. I am
                  currently working on a side project called Crypto Trader,
                  which is a turned based web application which uses real time
                  crypto price feeds with etherjs. The majority of my
                  development experience is in Andriod SDK and React.
                </Text>
                <Divider mb="30px" />

                <Flex alignItems="center" justify="space-between">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Web Developments
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(252,106,0,.3)"></Box>
                </Flex>
                <Link
                  href="https://apkpure.com/mineral-merchant/ca.daneMatrix.mineralmerchant"
                  isExternal
                >
                  <Text fontWeight="bold">
                    Mineral Merchant
                    <ExternalLinkIcon mx="2px" />
                  </Text>
                </Link>

                <UnorderedList mb="10px">
                  <ListItem>
                    An android application that allows users to buy and sell
                    minerals in a virtual world
                  </ListItem>
                  <ListItem>
                    Choose to play as a hero or an outlaw for two different
                    gameplay experiences
                  </ListItem>

                  <ListItem>
                    Built using Java with the Android SDK in Android Studio
                  </ListItem>
                </UnorderedList>
                <Link href="#" isExternal>
                  <Text fontWeight="bold">Starcraft 2 Tracker</Text>
                </Link>
                <UnorderedList mb="10px">
                  <ListItem>
                    Simple UI integrating Starcraft 2 API to track win /loss
                    record of games played between friends
                  </ListItem>
                  <ListItem>
                    Technologies used were React and Tailwind to build out the
                    UI and implementing Firebase for the backend
                  </ListItem>
                </UnorderedList>
              </GridItem>
              <GridItem colSpan={1} mt="15px">
                <Image src={img}></Image>
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Contact
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(252,106,0,.3)"></Box>
                </Flex>
                <Flex>
                  <Text fontWeight="bold" pr="5px">
                    Address:
                  </Text>
                  <Text>Ontario, Canada</Text>
                </Flex>
                <Flex>
                  <Text fontWeight="bold" pr="5px">
                    Email:
                  </Text>
                  <Text>tylermaatrix@gmail.com</Text>
                </Flex>
                <Divider mt="5px" mb="30px" />
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Tech Used
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(252,106,0,.3)"></Box>
                </Flex>
                <UnorderedList mb="10px">
                  <ListItem>React</ListItem>
                  <ListItem>Android SDK</ListItem>
                  <ListItem>Java</ListItem>
                  <ListItem>Javascript</ListItem>
                  <ListItem>Ethersjs</ListItem>
                  <ListItem>NextJs</ListItem>
                  <ListItem>Chakra UI</ListItem>
                </UnorderedList>
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Education
                  </Text>
                  <Box w="50%" h="20px" bg="rgb(252,106,0,.3)"></Box>
                </Flex>
                <Text fontWeight="bold">Computer Programming </Text>
                <Text>Durham College</Text>
                <Flex alignItems="center" justify="space-between" mt="20px">
                  <Text fontSize="2xl" fontWeight="bold" mb="10px">
                    Employment
                  </Text>
                  <Box w="40%" h="20px" bg="rgb(252,106,0,.3)"></Box>
                </Flex>

                <Text display="inline" fontWeight="bold">
                  Accu-Link
                </Text>
                <Text display="inline">
                  {" "}
                  <span></span> Customer Service Representative
                </Text>
                <br />
                <Text display="inline" fontWeight="bold">
                  Web Developer Freelancer
                </Text>
                <Divider />
              </GridItem>
            </Grid>
          </Box>
        </main>
      </>
    </ChakraProvider>
  );
}

export default App;
