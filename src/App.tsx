import { Box, Grid, GridItem, VStack, Text } from "@chakra-ui/react";
import ProgressBar from "./components/ProgressBar";
import Banner from "./components/Banner";

function App() {
    return (
        <Box
            bg="brand.background"
            color="white"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            // px={{ base: 4, md: 20 }}
            pt={{ base: 8, md: 20 }}
        >
            {/* Main container */}
            <Box w="full" maxW="80%">
                <VStack gap={6} align="stretch">
                    <GridItem>
                        <ProgressBar></ProgressBar>
                    </GridItem>

                    <GridItem>
                        <Banner></Banner>
                    </GridItem>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="full">
                        <GridItem bg="brand.cardbg" p={4} borderRadius="md">
                            <Text>Upload grid </Text>
                        </GridItem>
                        <GridItem bg="teal.500" p={4} borderRadius="md">
                            <Text>Link grid </Text>
                        </GridItem>
                    </Grid>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="full">
                        <GridItem bg="orange.500" p={4} borderRadius="md">
                            <Text>Model type selection</Text>
                        </GridItem>
                        <GridItem bg="purple.500" p={4} borderRadius="md">
                            <Text>Clothing type selection</Text>
                        </GridItem>
                    </Grid>

                    <GridItem bg="brand.primary" p={2} borderRadius="4xl" textAlign="center">
                        <Text>Submit button</Text>
                    </GridItem>
                </VStack>
            </Box>
        </Box>
    );
}

export default App;
