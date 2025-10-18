import { RadioGroup, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

const ModelTypeSelector = () => {
    const [value, setValue] = useState("پیراهن");
    const items = [
        { label: "پیراهن", value: "پیراهن" },
        { label: "فول بادی", value: "فول بادی" },
        { label: "بالا تنه ", value: "بالاتنه " },
        { label: "پایین‌ تنه ", value: "پایین‌تنه " }
    ];

    return (
        <RadioGroup.Root
            value={value}
            onValueChange={(e) => {
                if (e.value) {
                    setValue(e.value);
                }
            }}
            dir="rtl"
            justifyItems="center"
            mt={5}
            ml={8}
        >
            <SimpleGrid columns={2} gap={10}>
                {items.map((item) => (
                    <RadioGroup.Item key={item.value} cursor="pointer" value={item.value}>
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                        <RadioGroup.ItemIndicator ml={1} boxSize={3} />
                    </RadioGroup.Item>
                ))}
            </SimpleGrid>
        </RadioGroup.Root>
    );
};

export default ModelTypeSelector;
