import { Box, Grid, GridItem, VStack, Text, Input, Center } from "@chakra-ui/react";
import ProgressBar from "./components/ProgressBar";
import Banner from "./components/Banner";
import CardContainer from "./components/CardContainer";
import URLInput from "./components/URLInput";
import ImgUpload from "./components/ImgUpload";
import ModelTypeSelector from "./components/ModelTypeSelector";

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
                        <ProgressBar />
                    </GridItem>

                    <GridItem>
                        <Banner />
                    </GridItem>

                    <Box alignItems="center" mt={{ base: -32, md: -32 }} mx={{ base: 6, md: 16 }} position="relative">
                        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8} w="full">
                            <GridItem>
                                <CardContainer heading="۲. عکس مدل رو اینجا آپلود کنید.">
                                    <ImgUpload />
                                </CardContainer>
                            </GridItem>
                            <GridItem>
                                <CardContainer heading="۱. لینک محصول از سایت جین‌وست رو اینجا paste کنید.">
                                    <URLInput />
                                </CardContainer>
                            </GridItem>
                            <GridItem>
                                <CardContainer heading="۴. نوع تصویر لباس:">
                                    <Text> Lorem ipsum dolor sit amet. </Text>
                                </CardContainer>
                            </GridItem>
                            <GridItem>
                                <CardContainer heading="۳. نوع مدل رو انتخاب کنید:">
                                    <ModelTypeSelector />
                                </CardContainer>
                            </GridItem>
                        </Grid>
                    </Box>

                    <GridItem bg="brand.primary" p={2} borderRadius="4xl" textAlign="center">
                        <Text>Submit button</Text>
                    </GridItem>
                </VStack>
            </Box>
        </Box>
    );
}

export default App;
