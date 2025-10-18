import { useState } from "react";
import { Box, SimpleGrid, Text, Button, Image } from "@chakra-ui/react";

import dourse from "../assets/dourse.svg";
import tshirt from "../assets/tshirt.svg";
import manto from "../assets/manto.svg";
import coat from "../assets/coat.svg";
import blouse from "../assets/blouse.svg";
import dress from "../assets/dress.svg";
import skirt from "../assets/skirt.svg";
import shorts from "../assets/shorts.svg";
import shoes from "../assets/shoes.svg";
import pants from "../assets/pants.svg";

const ClothingTypeSelector = () => {
    const [selected, setSelected] = useState<string>("manto");

    const clothingOptions = [
        { id: "dourse", label: "دورس", icon: dourse },
        { id: "tshirt", label: "تی‌شرت", icon: tshirt },
        { id: "manto", label: "مانتو", icon: manto },
        { id: "coat", label: "کت", icon: coat },
        { id: "blouse", label: "بلوز", icon: blouse },
        { id: "dress", label: "پیراهن", icon: dress },
        { id: "skirt", label: "دامن", icon: skirt },
        { id: "shorts", label: "شلوارک", icon: shorts },
        { id: "shoes", label: "کفش", icon: shoes },
        { id: "pants", label: "شلوار", icon: pants }
    ];

    return (
        <SimpleGrid columns={{ base: 2, sm: 3, md: 5 }} gap={3} my={2} mx={6} justifyItems="center">
            {clothingOptions.map((option) => {
                const isSelected = selected === option.id;
                return (
                    <Button
                        key={option.id}
                        variant="plain"
                        onClick={() => setSelected(option.id)}
                        color={isSelected ? "brand.primary" : "white"}
                        borderColor={isSelected ? "orange.400" : "brand.cardbg"}
                        borderWidth="1.5px"
                        _hover={{ borderColor: "brand.primary", color: "brand.primary", bg: "none" }}
                        w="full"
                        h="full"
                        display="flex"
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center"
                        rounded="md"
                        gap={1}
                        transition="all 0.2s ease"
                    >
                        <Image
                            src={option.icon}
                            alt={option.label}
                            // mt={1}
                            // boxSize="32px"
                            // mb={2}
                            // filter={isSelected ? "brightness(1)" : "brightness(0.8)"}
                        />
                        <Text fontSize="s" fontWeight="extralight">
                            {option.label}
                        </Text>
                    </Button>
                );
            })}
        </SimpleGrid>
    );
};

export default ClothingTypeSelector;
