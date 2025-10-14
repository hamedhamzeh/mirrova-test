import { Box, Text, Flex, Image } from "@chakra-ui/react";
import welcomeIcon from "../assets/welcome-icon.png";

const Banner = () => {
    return (
        <Box
            style={{
                background: "linear-gradient(90deg, #384E5C 0%, #3D7497 100%)"
            }}
            borderRadius="md"
            height={370}
            position="relative"
            dir="rtl"
        >
            <Flex align="center" justify="flex-start" pt={14} flexDirection="column" gap={3} height="100%">
                <Image src={welcomeIcon} alt="Decorative Star" boxSize="40px" />
                <Text fontSize="2xl" fontWeight="bold">
                    خوش اومدین!
                </Text>
                <Text fontSize="md" opacity={0.9}>
                    برای پرو مجازی لباس، اطلاعات زیر رو وارد کنید.
                </Text>
            </Flex>
        </Box>
    );
};
export default Banner;
