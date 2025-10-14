import { HStack, Progress, Text } from "@chakra-ui/react";

const ProgressBar = () => {
    return (
        <Progress.Root defaultValue={9}>
            <HStack gap="4">
                <Progress.Track h={3} bg="brand.input" flex="1" borderRadius="full" overflow="visible">
                    <Progress.Range
                        borderRadius="full"
                        style={{
                            background: "linear-gradient(90deg, #FED072 0%, #F59567 100%)",
                            boxShadow: "0 0 8px 3px #FED0722E"
                        }}
                    />
                </Progress.Track>
                <Progress.ValueText fontSize="md" fontWeight="bold" textAlign="right">
                    <Text as="span" color="white">
                        ۱
                    </Text>
                    <Text as="span" color="brand.input">
                        /۳
                    </Text>
                </Progress.ValueText>
            </HStack>
        </Progress.Root>
    );
};

export default ProgressBar;
