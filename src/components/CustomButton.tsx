import { Button, ButtonProps } from "@chakra-ui/react";
import { LuRocket } from "react-icons/lu";

interface Props extends ButtonProps {
    label: string;
}

const CustomButton = ({ label, ...props }: Props) => {
    return (
        <Button
            bg="brand.primary"
            color="brand.background"
            _hover={{
                bg: "#ef743bff",
                boxShadow: "0 0 5px #ea500eff",
                transform: "scale(1.03)"
            }}
            transition="all 0.2s ease"
            rounded="full"
            px={8}
            py={6}
            fontSize="md"
            fontWeight="medium"
            {...props}
        >
            <LuRocket size={18} />
            {label}
        </Button>
    );
};

export default CustomButton;
