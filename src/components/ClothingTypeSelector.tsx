import { useState } from "react";
import { Box, SimpleGrid, Text, Button, Image } from "@chakra-ui/react";

const ClothingTypeSelector = () => {
    const [selected, setSelected] = useState<string>("mantoo");

    const clothingOptions = [
        { id: "dource", label: "دورس", icon: "src/assets/dourse.svg" },
        { id: "tshirt", label: "تی‌شرت", icon: "src/assets/tshirt.svg" },
        { id: "manto", label: "مانتو", icon: "src/assets/manto.svg" },
        { id: "coat", label: "کت", icon: "src/assets/coat.svg" },
        { id: "blouse", label: "بلوز", icon: "src/assets/blouse.svg" },
        { id: "dress", label: "پیراهن", icon: "src/assets/dress.svg" },
        { id: "skirt", label: "دامن", icon: "src/assets/skirt.svg" },
        { id: "shorts", label: "شلوارک", icon: "src/assets/shorts.svg" },
        { id: "shoes", label: "کفش", icon: "src/assets/shoes.svg" },
        { id: "pants", label: "شلوار", icon: "src/assets/pants.svg" }
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
