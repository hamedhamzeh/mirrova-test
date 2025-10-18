import { Box, Text, Flex, Image } from "@chakra-ui/react";
import welcomeIcon from "../assets/welcome-icon.png";
import { motion } from "motion/react";

import sparkSvg from "../assets/banner-sparkels.svg";
import starSvg from "../assets/banner-star.svg";

const MotionBox = motion(Box);

const Banner = () => {
    return (
        <Box
            position="relative"
            overflow="hidden"
            borderRadius="md"
            height={300}
            dir="rtl"
            style={{
                background: "linear-gradient(90deg, #384E5C 0%, #3D7497 100%)"
            }}
        >
            <Flex
                align="center"
                justify="flex-start"
                pt={10}
                flexDirection="column"
                gap={3}
                height="100%"
                position="relative"
                zIndex={2}
            >
                <Image src={welcomeIcon} alt="Decorative Star" boxSize="40px" />
                <Text fontSize="2xl" fontWeight="bold">
                    خوش اومدین!
                </Text>
                <Text fontSize="md" opacity={0.9}>
                    برای پرو مجازی لباس، اطلاعات زیر رو وارد کنید.
                </Text>
            </Flex>

            <MotionBox
                position="absolute"
                top="20%"
                right="6%"
                zIndex={1}
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
                <Image src={starSvg} alt="Star" boxSize="50px" opacity={0.9} />
            </MotionBox>

            <MotionBox
                position="absolute"
                top="35%"
                right="11%"
                zIndex={1}
                animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
                <Image src={starSvg} alt="Star" boxSize="40px" opacity={0.6} transform="rotate(45deg)" />
            </MotionBox>

            <MotionBox
                position="absolute"
                top="3"
                left="5%"
                zIndex={0}
                // w="110px"
                h="220px"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
                <Image src={sparkSvg} alt="Sparkle" w="full" h="full" objectFit="contain" />
            </MotionBox>
        </Box>
    );
};
export default Banner;
