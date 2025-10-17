import { Box, Text, Flex } from "@chakra-ui/react";

interface Props {
    heading: string;
    children: React.ReactNode;
}

const CardContainer = ({ heading, children }: Props) => {
    return (
        <Box height={48} bg="brand.cardbg" borderRadius="lg" dir="rtl" overflow="hidden">
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
