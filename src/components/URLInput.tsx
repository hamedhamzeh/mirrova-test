import { Input } from "@chakra-ui/react";

const URLInput = () => {
    return (
        <Input
            dir="ltr"
            placeholder="https://jeanswest.ir/products/"
            type="url"
            bg="brand.input" // Setting a specific background color using a semantic token
            size="md"
            borderWidth="0"
            borderRadius="1rem"
            mt={12}
            focusRingColor="brand.primary"
            focusRingWidth={2}
            _placeholder={{ color: "inherit", opacity: "0.4" }}
        />
    );
};

export default URLInput;
