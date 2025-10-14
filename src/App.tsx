import { Box, Grid, GridItem, VStack, Text } from "@chakra-ui/react";

function App() {
    return (
        <Box
            bg="gray.900"
            color="white"
            minH="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            // px={{ base: 4, md: 8 }}
            // py={{ base: 8, md: 12 }}
        >
            {/* Main container */}
            <Box w="full" maxW="80%">
                <VStack gap={6} align="stretch">
                    <GridItem bg="red.500" p={1} borderRadius="md">
                        <Text>Progress bar</Text>
                    </GridItem>

                    <GridItem bg="blue.500" p={20} borderRadius="md" textAlign="center">
                        <Text>Header</Text>
                    </GridItem>

                    <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="full">
                        <GridItem bg="green.500" p={4} borderRadius="md">
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

                    <GridItem bg="pink.500" p={2} borderRadius="4xl" textAlign="center">
                        <Text>Submit button</Text>
                    </GridItem>
                </VStack>
            </Box>
        </Box>
    );
}

export default App;
