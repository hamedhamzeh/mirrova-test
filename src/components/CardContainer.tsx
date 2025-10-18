import { Box, Text, Flex } from "@chakra-ui/react";

interface Props {
    heading: string;
    children: React.ReactNode;
}

const CardContainer = ({ heading, children }: Props) => {
    return (
        <Box
            bg="brand.cardbg"
            borderRadius="lg"
            dir="rtl"
            overflow="hidden"
            height={{ base: "auto", sm: "auto", md: "auto", lg: "48" }}
            minH={{ base: "220px", sm: "auto", md: "auto", lg: "48" }}
        >
            <Flex py={6} px={4} direction="column" height="100%">
                <Text fontSize="lg" mb={1}>
                    {heading}
                </Text>
                <Box>{children}</Box>
            </Flex>
        </Box>
    );
};

export default CardContainer;
